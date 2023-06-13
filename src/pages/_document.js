import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="ml-[72px] h-full overflow-hidden">
      <Head />
      <body className='relative bg-gradient-to-tr from-[#B3E5FC] from-10% to-[#ECE9E6] to-90% pageTransition'>
        <div className="absolute top-96 -left-96 right-0 m-auto w-64 h-64 bg-[#D869FF] rounded-full filter blur-2xl -z-10"></div>
        <div className="absolute top-[32rem] left-80 right-0 m-auto w-72 h-72 bg-[#FFD869] rounded-full filter blur-2xl -z-10"></div>
        <div className="absolute top-20 left-0 right-0 m-auto w-96 h-96 bg-[#69ffd8] rounded-full shadow-2xl shadow-[#E9F9FC] filter blur-2xl -z-10"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
