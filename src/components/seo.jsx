import Head from 'next/head'

const SEO = ({ pageTitle, font, noindex = true }) => (
  <Head>
    <title>
      {pageTitle && `${pageTitle} | Techstacks IT Web Development Services`}
    </title>
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="robots" content={`${noindex ? 'noindex,' : ''} follow`} />

    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta
      name="description"
      content="Techstacks - team of developers and designers committed to help our clients stand out and take advantage of the web by creating beautiful, user-friendly, fast, secure, high converting, engaging websites. Building websites with a purpose. Hire us today and accelerate your business growth."
    />
    <meta
      property="og:title"
      content="Techstacks - IT Web Development Services"
    />
    <meta
      property="og:description"
      content="Building websites with a purpose. Empowering the web with fast, secure, high converting, engaging websites with excellent performance and SEO score."
    />
    <meta
      name="twitter:description"
      content="Building websites with a purpose. Empowering the web with fast, secure, high converting, engaging websites with excellent performance and SEO score."
    />
    <meta
      name="twitter:title"
      content="Techstacks - IT Web Development Services"
    />

    <link rel="shortlink" href="https://techstacksph.com/" />
    <link rel="canonical" href="https://techstacksph.com/" />
    <meta
      property="og:image"
      content="https://techstacksph.com/assets/img/hero/hero-2.png"
    />
    <meta
      property="og:image:secure_url"
      content="https://techstacksph.com/assets/img/hero/hero-2.png"
    />
    <meta property="og:image:width" content="1024" />
    <meta property="og:image:height" content="538" />
    <meta
      name="twitter:image"
      content="https://techstacksph.com/assets/img/hero/hero-2.png"
    />
    <meta property="og:url" content="https://techstacksph.com/" />

    {font && <link href={font} rel="stylesheet" />}
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  </Head>
)

export default SEO
