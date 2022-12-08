import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <link rel='preload' href='/fonts/PPPangramSansRounded-Medium.otf' as='font' crossOrigin='' type='font/otf' />
      <link rel='preload' href='/fonts/PPPangramSansRounded-Semibold.otf' as='font' crossOrigin='' type='font/otf' />
      <link rel='preload' href='/fonts/PPPangramSansRounded-Bold.otf' as='font' crossOrigin='' type='font/otf' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
