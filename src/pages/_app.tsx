import '@/styles/globals.css'
import type { AppProps } from 'next/app'
/// <reference types="aos" />
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  return <Component {...pageProps} />
}
