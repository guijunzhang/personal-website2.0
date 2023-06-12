import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Guijun Z. | Frontend Developer</title>
        <meta name="title" content="Guijun Z. | Frontend Developer" />
        <meta name="description" content="This website serves as a showcase of Guijun's skills, projects, and professional journey in the field of frontend development." />
        <meta name="keywords" content="UX Design, Front-end Development, Tailwind CSS, Next.Js, CSS, JavaScript, HTML5, React.js, Node.js, Web Development, HTML, ES6+" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Guijun Zhang" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
    <Component {...pageProps} />
    </>
  )
}
