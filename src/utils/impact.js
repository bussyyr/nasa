import { toRad } from "./geo";


export const EARTH_RADIUS_KM = 6371;
export const clamp = (n, min, max) => Math.max(min, Math.min(max, n));


export function randomPointsAround(center, radiusKm, count) {
    const pts = [];
    const cosLat = Math.cos(toRad(center.lat));
    for (let i = 0; i < count; i++) {
        const u = Math.random();
        const v = Math.random();
        const rKm = radiusKm * Math.sqrt(u);
        const t = 2 * Math.PI * v;
        const dLat = (rKm / 111) * Math.sin(t);
        const dLng = (rKm / (111 * Math.max(0.2, cosLat))) * Math.cos(t);
        const lat = center.lat + dLat;
        const lng = center.lng + dLng;
        const radial = Math.exp(-((rKm / radiusKm) ** 2));
        const latBias = 1 - Math.abs(lat) / 120;
        const weight = Math.max(0, radial * latBias);
        pts.push({ lat, lng, weight });
    }
    return pts;
}


export function impactModel({ diameterM, speedKms, angleDeg }) {
    const Dkm = diameterM / 1000;
    const v = speedKms;
    const angleFactor = Math.sin(toRad(angleDeg));
    const energyScale = Dkm ** 3 * (v / 20) ** 2;
    const severe = 20 * Math.cbrt(energyScale) * angleFactor;
    const major = severe * 1.8;
    const light = severe * 3;
    return { severeRadiusKm: severe, majorRadiusKm: major, lightRadiusKm: light };
}


export function estimatePopulation(points, severityRadiusKm) {
    const sum = points.reduce((a, p) => a + p.weight, 0);
    const scale = Math.max(1, Math.round(severityRadiusKm * 30000));
    return Math.round(sum * scale);
}


export function estimateDeaths(pop, severityKm) {
    const f = clamp(severityKm / 120, 0.02, 0.65);
    return Math.round(pop * f);
}


export function formatCompact(n) {
    if (n >= 1e9) return (n / 1e9).toFixed(1) + "B";
    if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
    if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
    return String(n);
}