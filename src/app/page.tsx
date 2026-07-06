'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { nimiqMiniApp } from "@/services/nimiq/mini-app.service";

export default function Home() {
  const [isInNimiqPay, setIsInNimiqPay] = useState(false);

  useEffect(() => {
    setIsInNimiqPay(nimiqMiniApp.isRunningInNimiqPay());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-6">
      <div className="max-w-4xl text-center">
        {isInNimiqPay && (
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 border-0 text-white">
            🚀 Running in Nimiq Pay
          </Badge>
        )}
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          CodeBounty AI
        </h1>
        <p className="text-2xl text-gray-300 mb-8">
          The AI Operating System for Open Source Collaboration
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/login">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Dashboard
            </Button>
          </Link>
          {!isInNimiqPay && (
            <Link href="nimiqpay://miniapp?url=https://codebounty-ai.github.io/codebounty-ai">
              <Button size="lg" variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
                Open in Nimiq Pay
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
