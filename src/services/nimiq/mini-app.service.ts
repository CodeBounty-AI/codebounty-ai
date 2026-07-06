'use client';

import { init, requestDeviceIdentifier } from '@nimiq/mini-app-sdk';

export interface NimiqAccount {
  address: string;
  isNimiq: boolean;
}

export interface NimiqPayment {
  from: string;
  to: string;
  amount: number;
  currency?: 'NIM' | 'USDT' | 'ETH';
  memo?: string;
}

export interface NimiqTransaction {
  hash: string;
  from: string;
  to: string;
  amount: string;
  status: 'pending' | 'confirmed' | 'failed';
  timestamp: number;
}

declare global {
  interface Window {
    ethereum?: any;
    nimiqPay?: { language: string };
  }
}

class NimiqMiniAppService {
  private provider: any = null;
  private initialized = false;

  async init(): Promise<boolean> {
    if (typeof window === 'undefined') return false;
    try {
      this.provider = await init();
      this.initialized = true;
      return true;
    } catch (e) {
      console.warn('Nimiq init failed, using fallback', e);
      return false;
    }
  }

  isRunningInNimiqPay(): boolean {
    return !!(typeof window !== 'undefined' && (window.nimiqPay || window.ethereum));
  }

  getUserLanguage(): string {
    if (typeof window === 'undefined') return 'en';
    return window.nimiqPay?.language || navigator.language?.split('-')[0] || 'en';
  }

  async getDeviceIdentifier(reason: string = 'CodeBounty AI'): Promise<string | null> {
    try {
      if (!this.initialized) await this.init();
      if (!this.isRunningInNimiqPay()) return 'mock-device-' + Math.random().toString(36).slice(2, 10);
      const id = await requestDeviceIdentifier({ reason });
      return id;
    } catch { return null; }
  }

  async listAccounts(): Promise<NimiqAccount[]> {
    try {
      if (!this.initialized) await this.init();
      if (!this.isRunningInNimiqPay() || !this.provider) {
        return [{ address: 'NQ12 3456 7890 1234 5678 9012 3456 7890 1234', isNimiq: true }];
      }
      const accounts = await this.provider.listAccounts();
      return accounts.map((a: any) => ({ address: a.address, isNimiq: true }));
    } catch { return []; }
  }

  async getBalance(address: string): Promise<string> {
    try {
      if (!this.initialized) await this.init();
      if (!this.isRunningInNimiqPay() || !this.provider) return (Math.random() * 100).toFixed(2);
      const balance = await this.provider.getBalance(address);
      return balance.toString();
    } catch { return '0'; }
  }

  async sendPayment(payment: NimiqPayment): Promise<NimiqTransaction | null> {
    try {
      if (!this.initialized) await this.init();
      if (!this.isRunningInNimiqPay() || !this.provider) {
        return { hash: 'mock-hash', from: payment.from, to: payment.to, amount: payment.amount.toString(), status: 'confirmed', timestamp: Date.now() };
      }
      const tx = await this.provider.sendTransaction({
        from: payment.from,
        to: payment.to,
        value: payment.amount,
        currency: payment.currency || 'NIM',
        memo: payment.memo,
      });
      return { hash: tx.hash || 'pending', from: payment.from, to: payment.to, amount: payment.amount.toString(), status: 'pending', timestamp: Date.now() };
    } catch { return null; }
  }

  async signMessage(address: string, message: string): Promise<string | null> {
    try {
      if (!this.initialized) await this.init();
      if (!this.isRunningInNimiqPay() || !this.provider) return 'mock-sig';
      return await this.provider.signMessage({ address, message });
    } catch { return null; }
  }
}

export const nimiqMiniApp = new NimiqMiniAppService();
