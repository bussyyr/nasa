import React from "react";
export function LabeledRange({ label, min, max, step, value, setValue }) {
    return (
        <div className="mt-3">
            <label className="block text-sm mb-1">{label}</label>
            <input className="w-full" type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
        </div>
    );
}