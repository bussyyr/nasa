import React from "react";
export function Toggle({ value, onChange, options }) {
    return (
        <div className="inline-flex rounded-lg overflow-hidden border border-white/10">
            {options.map((opt, i) => (
                <button key={opt.value} onClick={() => onChange(opt.value)} className={`px-3 py-1.5 text-sm ${value === opt.value ? "bg-emerald-500 text-black" : "bg-neutral-800/60 text-white"} ${i !== options.length - 1 ? "border-r border-white/10" : ""}`}>
                    {opt.label}
                </button>
            ))}
        </div>
    );
}