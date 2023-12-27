import {
  type DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

function MyDocument({ __NEXT_DATA__ }: DocumentProps) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <noscript>
          <iframe
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTNRQ3KQ"
            style={{ display: 'none', visibility: 'hidden' }}
            title="gtag-frame"
            width="0"
          />
        </noscript>
      </body>
    </Html>
  );
}

export default MyDocument;
