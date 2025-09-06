export const toRad = (deg) => (deg * Math.PI) / 180;


export function featureCentroid(feature) {
    const geom = feature.geometry;
    if (!geom) return { lat: 0, lng: 0 };
    let sumLat = 0, sumLng = 0, n = 0;
    const addCoords = (coords) => {
        for (const ring of coords) {
            for (const pt of ring) {
                const [lng, lat] = pt; sumLat += lat; sumLng += lng; n++;
            }
        }
    };
    if (geom.type === "Polygon") addCoords(geom.coordinates);
    else if (geom.type === "MultiPolygon") for (const poly of geom.coordinates) addCoords(poly);
    else return { lat: 0, lng: 0 };
    if (n === 0) return { lat: 0, lng: 0 };
    return { lat: sumLat / n, lng: sumLng / n };
}


export function colorScale(t) {
    const c = Math.max(0, Math.min(1, t));
    const r = Math.round(255 * c);
    const g = Math.round(120 * (1 - c));
    const b = Math.round(60 * (1 - c));
    return `rgba(${r},${g},${b},0.85)`;
}