import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div className="h-screen overflow-y-scroll">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
