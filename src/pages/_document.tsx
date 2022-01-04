// Modules
import Document, { Head, Html, Main, NextScript } from "next/document";

class ColonySchoolDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&family=Inter&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Head>
        <body className="text-light-on-background bg-light-background
          dark:text-dark-on-background dark:bg-dark-background">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ColonySchoolDocument;
