import Head from 'next/head'

function MyPage() {
  return (
    <div>
      <Head>
      <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        <meta name="description" content="Your description" />
        <meta name="author" content="Your name" />

        <meta property="og:site_name" content="" />
        <meta property="og:site" content="" />
        <meta property="og:title" content=""/>
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary_large_image" />

        <title>Webpage Title</title>
        
        {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
        <link href="../../src/styles/globals.css" rel="stylesheet" />
        <link href="styles/styles.css" rel="stylesheet" /> */}
        
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <p>Hello World!</p>
    </div>
  )
}

export default MyPage;