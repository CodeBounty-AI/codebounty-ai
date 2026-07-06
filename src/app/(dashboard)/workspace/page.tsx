'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WalletConnect } from "@/components/wallet/WalletConnect";
import { DeepLinkShare } from "@/components/wallet/DeepLinkShare";

export default function Workspace() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Workspace</h1>
      <div className="space-y-4">
        <WalletConnect />
        <Tabs defaultValue="tasks">
          <TabsList>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
          </TabsList>
          <TabsContent value="tasks">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-4 text-gray-400">No tasks yet.</CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="wallet">
            <DeepLinkShare />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
