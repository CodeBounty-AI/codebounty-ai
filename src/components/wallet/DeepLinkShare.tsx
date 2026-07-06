'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Copy, Share2, Check } from 'lucide-react';

export function DeepLinkShare() {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const deepLink = `nimiqpay://miniapp?url=${encodeURIComponent(url)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(deepLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2 text-sm">
          <Share2 className="h-4 w-4" /> Share in Nimiq Pay
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex gap-2">
          <Input value={deepLink} readOnly className="bg-white/5 border-white/20 text-white text-xs font-mono" />
          <Button variant="outline" size="icon" onClick={handleCopy} className="border-white/20 text-white hover:bg-white/10">
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
