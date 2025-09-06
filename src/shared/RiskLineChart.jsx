import React from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";


export function RiskLineChart({ data }) {
    return (
        <div className="rounded-2xl bg-neutral-800/60 border border-white/10 p-3">
            <div className="text-xs uppercase opacity-60 mb-2">Risk vs Distance</div>
            <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="d" tickFormatter={(v) => `${v} km`} />
                        <YAxis domain={[0, 1]} />
                        <Tooltip formatter={(v) => v} labelFormatter={(l) => `${l} km`} />
                        <Legend />
                        <Line type="monotone" dataKey="blast" />
                        <Line type="monotone" dataKey="thermal" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}