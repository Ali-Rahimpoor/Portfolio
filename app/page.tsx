// app/page.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/Portfolio/home');
  }, [router]);

  return null; // یا یک اسکلتون/لودر نشان دهید
}