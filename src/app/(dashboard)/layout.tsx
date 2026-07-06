'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex">
      <aside className="w-64 border-r border-white/10 p-6 space-y-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          CodeBounty AI
        </h1>
        <nav className="space-y-2">
          <Link href="/dashboard"><Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white">Dashboard</Button></Link>
          <Link href="/bounty"><Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white">Bounties</Button></Link>
          <Link href="/workspace"><Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white">Workspace</Button></Link>
          <Link href="/leaderboard"><Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white">Leaderboard</Button></Link>
          <Link href="/admin"><Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white">Admin</Button></Link>
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
