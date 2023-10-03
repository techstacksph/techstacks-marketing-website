import { Head, Html, Main, NextScript } from 'next/document';


const MyDocument = ({ __NEXT_DATA__ }) => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <NextScript />
      <noscript>
        <iframe
          title="gtag-frame"
          src="https://www.googletagmanager.com/ns.html?id=GTM-PTNRQ3KQ"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </body>
  </Html>
);

export default MyDocument;
