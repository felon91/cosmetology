import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import Script from 'next/script';
import { Image } from 'react-bootstrap';

import type { DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="ru">
        <Head>
          <link rel="icon" type="image/jpeg" sizes="32x32" href="/favicon.jpg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossOrigin" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="XDLkzSv4yx8fso4b0yPtcNRtnRXykukObDODrpigzVc"
          />
          <meta name="yandex-verification" content="529464850001550b" />
        </Head>
        <body>
          <Script id="google-analytics" strategy="lazyOnload">
            {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(90546090, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });`}
          </Script>
          <noscript>
            <div>
              <Image
                src="https://mc.yandex.ru/watch/90546090"
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
              />
            </div>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
