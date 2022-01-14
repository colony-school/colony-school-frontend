// Modules
import type { AppProps } from "next/app";

// Components
import Layout from "@components/layout";

// Styles
import "@styles/global.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

// Main component
function App({ Component, pageProps }: AppProps) {
  const route = useRouter().route;
  
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Layout key={route}>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

// Exports
export default App;
