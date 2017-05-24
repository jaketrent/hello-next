import Head from 'next/head'
import Link from 'next/link'
import 'isomorphic-fetch'

import StarWars from '../components/star-wars'
import UserAgent from '../components/user-agent'

const Index = ({ stars }) => (
  <div>
    <Head>
      <title>Super Star Wars</title>
      <meta name="viewport" content="initial-scale=1.0,width=device-width" />
    </Head>

    Hello Next.js!
    <p>
      Zeit stars: {stars}
    </p>
    <StarWars />
    <UserAgent />
    <p>Scoped</p>

    <Link href="/about" prefetch><a>About</a></Link>

    <style jsx>{`
      p {
        color: white;
      }
      div {
        background: red;
      }
      @media (min-width:600px) {
        div {
          background: lightblue;
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        background: black;
      }
    `}</style>
  </div>
)

Index.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Index
