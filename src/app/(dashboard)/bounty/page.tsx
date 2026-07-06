'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const bounties = [
  { id: 1, title: 'Fix auth bug', reward: 50, difficulty: 'MEDIUM', status: 'OPEN' },
  { id: 2, title: 'Add dark mode', reward: 30, difficulty: 'EASY', status: 'OPEN' },
  { id: 3, title: 'Security audit', reward: 75, difficulty: 'HARD', status: 'OPEN' },
];

export default function BountyPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Bounty Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bounties.map((b) => (
          <Link key={b.id} href={`/bounty/${b.id}`}>
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition">
              <CardHeader><CardTitle className="text-white">{b.title}</CardTitle></CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="border-green-400 text-green-400">{b.reward} NIM</Badge>
                  <Badge variant="outline" className="border-blue-400 text-blue-400">{b.difficulty}</Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">{b.status}</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
