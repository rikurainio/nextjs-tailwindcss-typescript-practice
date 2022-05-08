import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const MyDocument = () => {
    return (
        <Html className='scroll-smooth bg-erasion-drk1'>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
}

export default MyDocument;