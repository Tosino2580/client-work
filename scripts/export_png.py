import os
import math
from PIL import Image, ImageDraw, ImageFont

def cubic_bezier(p0, p1, p2, p3, steps=100):
    points = []
    for i in range(steps + 1):
        t = i / float(steps)
        u = 1.0 - t
        x = (u**3 * p0[0]) + (3 * u**2 * t * p1[0]) + (3 * u * t**2 * p2[0]) + (t**3 * p3[0])
        y = (u**3 * p0[1]) + (3 * u**2 * t * p1[1]) + (3 * u * t**2 * p2[1]) + (t**3 * p3[1])
        points.append((x, y))
    return points

def render_emblem(size=1024, dark_mode=False):
    # Render at 4x for pristine anti-aliasing
    scale = 4
    w = size * scale
    h = size * scale
    
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    center_x = w / 2.0
    center_y = h / 2.0
    radius = (w / 2.0) * 0.92
    
    bg_color = (18, 19, 22, 255) if not dark_mode else (255, 255, 255, 255)
    fg_color = (255, 255, 255, 255) if not dark_mode else (18, 19, 22, 255)
    fill_petal = (255, 255, 255, 36) if not dark_mode else (18, 19, 22, 36)
    
    # Outer circle
    draw.ellipse(
        [center_x - radius, center_y - radius, center_x + radius, center_y + radius],
        fill=bg_color
    )
    
    # The SVG viewBox is 0..100.
    # Map (x, y) in 0..100 to canvas:
    def map_pt(pt):
        # pt in 0..100 -> centered in w,h with scale
        # 50,50 is center
        emblem_scale = (w * 0.65) / 100.0
        x = center_x + (pt[0] - 50.0) * emblem_scale
        y = center_y + (pt[1] - 50.0) * emblem_scale
        return (x, y)
    
    # Path d="M50 20 C50 38 32 46 22 58 C16 65 19 78 30 80 C40 82 46 72 50 64 C54 72 60 82 70 80 C81 78 84 65 78 58 C68 46 50 38 50 20 Z"
    poly = []
    # C50 38 32 46 22 58
    poly.extend(cubic_bezier(map_pt((50, 20)), map_pt((50, 38)), map_pt((32, 46)), map_pt((22, 58))))
    # C16 65 19 78 30 80
    poly.extend(cubic_bezier(map_pt((22, 58)), map_pt((16, 65)), map_pt((19, 78)), map_pt((30, 80))))
    # C40 82 46 72 50 64
    poly.extend(cubic_bezier(map_pt((30, 80)), map_pt((40, 82)), map_pt((46, 72)), map_pt((50, 64))))
    # C54 72 60 82 70 80
    poly.extend(cubic_bezier(map_pt((50, 64)), map_pt((54, 72)), map_pt((60, 82)), map_pt((70, 80))))
    # C81 78 84 65 78 58
    poly.extend(cubic_bezier(map_pt((70, 80)), map_pt((81, 78)), map_pt((84, 65)), map_pt((78, 58))))
    # C68 46 50 38 50 20
    poly.extend(cubic_bezier(map_pt((78, 58)), map_pt((68, 46)), map_pt((50, 38)), map_pt((50, 20))))
    
    # Draw filled petal
    draw.polygon(poly, fill=fill_petal)
    
    stroke_w = int(3.5 * (w * 0.65) / 100.0)
    # Stroke for outer petal
    for i in range(len(poly) - 1):
        draw.line([poly[i], poly[i+1]], fill=fg_color, width=stroke_w)
    draw.line([poly[-1], poly[0]], fill=fg_color, width=stroke_w)
    
    # Center stem: M50 24 V65
    stem_w = int(3.0 * (w * 0.65) / 100.0)
    draw.line([map_pt((50, 24)), map_pt((50, 65))], fill=fg_color, width=stem_w)
    
    # Left curve: M50 44 C42 48 34 54 30 64
    left_curve = cubic_bezier(map_pt((50, 44)), map_pt((42, 48)), map_pt((34, 54)), map_pt((30, 64)))
    for i in range(len(left_curve) - 1):
        draw.line([left_curve[i], left_curve[i+1]], fill=fg_color, width=stroke_w)
        
    # Right curve: M50 44 C58 48 66 54 70 64
    right_curve = cubic_bezier(map_pt((50, 44)), map_pt((58, 48)), map_pt((66, 54)), map_pt((70, 64)))
    for i in range(len(right_curve) - 1):
        draw.line([right_curve[i], right_curve[i+1]], fill=fg_color, width=stroke_w)
        
    # Circle cx=50 cy=20 r=3
    cr_pt = map_pt((50, 20))
    cr_r = 3.0 * (w * 0.65) / 100.0
    draw.ellipse([cr_pt[0] - cr_r, cr_pt[1] - cr_r, cr_pt[0] + cr_r, cr_pt[1] + cr_r], fill=fg_color)
    
    # Downsample with Lanczos for smooth antialiased output
    final_img = img.resize((size, size), Image.Resampling.LANCZOS)
    return final_img

def render_full_logo(dark_mode=False):
    # 1200 x 360
    scale = 4
    w = 1200 * scale
    h = 360 * scale
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    
    # Render emblem
    emblem_size = int(240 * scale)
    emblem_img = render_emblem(size=emblem_size, dark_mode=dark_mode)
    
    emblem_x = int(60 * scale)
    emblem_y = int((h - emblem_size) / 2)
    img.paste(emblem_img, (emblem_x, emblem_y), emblem_img)
    
    draw = ImageDraw.Draw(img)
    
    # Load system serif font (Georgia or Times New Roman on Windows)
    font_large = None
    font_small = None
    try:
        font_large = ImageFont.truetype("georgiab.ttf", int(140 * scale))
        font_small = ImageFont.truetype("arialbd.ttf", int(48 * scale))
    except Exception:
        try:
            font_large = ImageFont.truetype("timesbd.ttf", int(140 * scale))
            font_small = ImageFont.truetype("arialbd.ttf", int(48 * scale))
        except Exception:
            font_large = ImageFont.load_default()
            font_small = ImageFont.load_default()
            
    text_x = emblem_x + emblem_size + int(60 * scale)
    text_y1 = int(75 * scale)
    text_y2 = int(225 * scale)
    
    title_color = (255, 255, 255, 255) if dark_mode else (18, 19, 22, 255)
    sub_color = (226, 135, 117, 255) if dark_mode else (207, 110, 91, 255)
    
    # Draw Kasie
    draw.text((text_x, text_y1), "Kasie", font=font_large, fill=title_color)
    
    # Draw BODYWORK with character spacing
    sub_text = "B O D Y W O R K"
    draw.text((text_x + int(6 * scale), text_y2), sub_text, font=font_small, fill=sub_color)
    
    final_img = img.resize((1200, 360), Image.Resampling.LANCZOS)
    return final_img

os.makedirs("public", exist_ok=True)

# Generate Emblem PNGs
emblem_dark = render_emblem(size=1024, dark_mode=False)
emblem_dark.save("public/logo-emblem.png", "PNG")
print("Saved public/logo-emblem.png (1024x1024)")

emblem_white = render_emblem(size=1024, dark_mode=True)
emblem_white.save("public/logo-emblem-white.png", "PNG")
print("Saved public/logo-emblem-white.png (1024x1024)")

# Generate Full Logo PNGs
logo_dark = render_full_logo(dark_mode=False)
logo_dark.save("public/logo.png", "PNG")
print("Saved public/logo.png (1200x360)")

logo_white = render_full_logo(dark_mode=True)
logo_white.save("public/logo-white.png", "PNG")
print("Saved public/logo-white.png (1200x360)")
