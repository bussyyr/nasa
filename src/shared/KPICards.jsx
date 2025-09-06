import React from "react";
export function KPICards({ base }) {
    return (
        <div className="grid grid-cols-3 gap-2">
            <div className="rounded-2xl bg-neutral-800/60 border border-white/10 p-3">
                <div className="text-[10px] uppercase opacity-60">Severe radius</div>
                <div className="text-xl font-semibold">{Math.round(base.severe)} km</div>
            </div>
            <div className="rounded-2xl bg-neutral-800/60 border border-white/10 p-3">
                <div className="text-[10px] uppercase opacity-60">Major radius</div>
                <div className="text-xl font-semibold">{Math.round(base.major)} km</div>
            </div>
            <div className="rounded-2xl bg-neutral-800/60 border border-white/10 p-3">
                <div className="text-[10px] uppercase opacity-60">Light radius</div>
                <div className="text-xl font-semibold">{Math.round(base.light)} km</div>
            </div>
        </div>
    );
}