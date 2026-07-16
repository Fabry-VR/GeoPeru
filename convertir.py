import json, math, sys

with open(sys.argv[1], encoding='utf-8') as f:
    data = json.load(f)

features = [f for f in data['features'] if f['properties'].get('NOMBDEP') or f['properties'].get('NOMDEP')]

# Equirectangular projection for Peru
# Peru bbox approx: lon [-81.5, -68.5], lat [-18.5, -0.5]
# SVG viewBox: we'll scale to fit

lon_min, lon_max = -81.5, -67.5
lat_min, lat_max = -18.5, 0

svg_w, svg_h = 500, 650
scale_x = svg_w / (lon_max - lon_min)
scale_y = svg_h / (lat_max - lat_min)

def project(lon, lat):
    x = (lon - lon_min) * scale_x
    y = (lat_max - lat) * scale_y  # flip y
    return x, y

def coord_to_str(c):
    return f"{c[0]:.2f},{c[1]:.2f}"

def polygon_to_path(coords):
    parts = []
    for ring in coords:
        if not ring:
            continue
        d = f"M {coord_to_str(project(ring[0][0], ring[0][1]))}"
        for pt in ring[1:]:
            d += f" L {coord_to_str(project(pt[0], pt[1]))}"
        d += " Z"
        parts.append(d)
    return " ".join(parts)

def multi_to_path(coords):
    parts = []
    for polygon in coords:
        parts.append(polygon_to_path(polygon))
    return " ".join(parts)

print(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {svg_w} {svg_h}">')

for feat in features:
    props = feat['properties']
    name = props.get('NOMBDEP') or props.get('NOMDEP') or ''
    name = name.strip().title()
    
    geom = feat['geometry']
    if geom['type'] == 'Polygon':
        d = polygon_to_path(geom['coordinates'])
    elif geom['type'] == 'MultiPolygon':
        d = multi_to_path(geom['coordinates'])
    else:
        continue
    
    print(f'<path id="dep-{name.lower()}" class="departamento" data-name="{name}" d="{d}" />')

print('</svg>')
