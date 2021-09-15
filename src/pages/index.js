import {getSession, useUser} from '@auth0/nextjs-auth0';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import config from '../config';
import checkForSSO from '../utils/check-for-sso';
import Header from '../components/header';

const Home = props => {
  const {auth0} = config;
  const {user, isLoading} = useUser();

  return (
    <div className={styles.container}>
      <Head>
        <title>Auth0 silent login demo app - Reed.co.uk</title>
        <meta name="description" content="Reed.co.uk - auth0 silent login demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header
          login={`${auth0.login}?returnUrl=/`}
          logout={`${auth0.logout}?returnUrl=/`}
          user={!isLoading ? user : null}
        ></Header>
        <p>Reed.co.uk - auth0 silent login demo app</p>
      </main>
    </div>
  )
};

export async function getServerSideProps(context) {
  process.env.AUTH0_BASE_URL = config.auth0.AUTH0_BASE_URL;
  process.env.AUTH0_ISSUER_BASE_URL = config.auth0.AUTH0_ISSUER_BASE_URL;

  const session = getSession(context.req, context.res);

  if (config.auth0.enableSSOFeature && checkForSSO(context, session)) {
      return {
          redirect: {
              destination: `${config.apiUrl.public}${
                  config.auth0.slientLogin
              }${encodeURIComponent(context.resolvedUrl)}`,
              permanent: false
          }
      };
  }

  return {
      props: {
          profileUrl: config.auth0.profileUrl
      }
  };
}

export default Home;
