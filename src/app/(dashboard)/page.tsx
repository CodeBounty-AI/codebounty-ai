'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Bounties', value: '24' },
          { label: 'Active Devs', value: '12' },
          { label: 'Rewards', value: '1,240 NIM' },
          { label: 'Repos', value: '8' },
        ].map((item, i) => (
          <Card key={i} className="bg-white/5 border-white/10">
            <CardHeader><CardTitle className="text-white/60 text-sm">{item.label}</CardTitle></CardHeader>
            <CardContent className="text-2xl font-bold text-white">{item.value}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
