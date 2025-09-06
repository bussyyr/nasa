import React from "react";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";


export function CompareBarChart({ data, formatTick }) {
    return (
        <div className="rounded-2xl bg-neutral-800/60 border border-white/10 p-3">
            <div className="text-xs uppercase opacity-60 mb-2">Base vs Mitigated</div>
            <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={formatTick} />
                        <Tooltip formatter={(v) => v.toLocaleString()} />
                        <Legend />
                        <Bar dataKey="Base" />
                        <Bar dataKey="Mitigated" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}