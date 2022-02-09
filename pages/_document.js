import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="TEDxYCCE, x = independently organised TED event. Ideas worth spreading. This April, at YCCE, Nagpur."
          />
          <meta
            name="keywords"
            content="TEDx, YCCE, Yeshwantrao Chavan College of Engineering, Hingna, Nagpur, event, talks"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/plus-jakarta-display.min.css"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
