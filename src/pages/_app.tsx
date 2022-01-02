// Modules
import type { AppProps } from "next/app";

// Components
import Layout from "../components/layout/layout";

// Styles
// import "../../styles/tailwind-dist.css";

// Main component
function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Exports
export default App;
