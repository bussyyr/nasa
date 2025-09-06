import React from "react";
export function Stat({ title, value, emphasize }) {
    return (
        <div className={`rounded-2xl ${emphasize ? "bg-red-600/30 border-red-400/40" : "bg-neutral-800/60 border-white/10"} border p-3`}>
            <div className="text-[10px] uppercase opacity-60">{title}</div>
            <div className="text-xl font-semibold">{value.toLocaleString()}</div>
        </div>
    );
}