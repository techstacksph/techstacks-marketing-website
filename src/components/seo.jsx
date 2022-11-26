import Head from 'next/head'

const SEO = ({ pageTitle, font, noindex = true }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} | Techstacks Ph - web development agency`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="Techstacks Ph - We’re a team of developers and designers committed to help our clients stand out and take advantage of the web by creating beautiful, user-friendly, fast, secure, high converting, engaging websites. Hire us today and accelerate your business growth."
      />
      <meta name="robots" content={`${noindex ? 'noindex,' : ''} follow`} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
)

export default SEO
