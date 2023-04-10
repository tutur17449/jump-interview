import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container } from "@/components";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Container>
          <h1>Jump interview</h1>
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </Container>
      </main>
    </QueryClientProvider>
  );
}
