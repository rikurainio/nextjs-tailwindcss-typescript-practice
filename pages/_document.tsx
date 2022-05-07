import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const MyDocument = () => {
    return (
        <Html style={{ scrollBehavior: 'smooth', backgroundColor: 'black'}}>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
}

export default MyDocument;