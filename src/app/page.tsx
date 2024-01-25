import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import Camera from '@/app/components/camera';
import React from 'react';

export default function Home() {
  return (
    <main className='relative min-h-screen overflow-hidden whitespace-nowrap text-sm font-medium'>
      <Header />
      <div className='absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] flex-col flex-nowrap gap-3'>
          <Camera />
      </div>
      <Footer />
    </main>
  );
}
