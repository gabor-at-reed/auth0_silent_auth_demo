import {UserProvider} from '@auth0/nextjs-auth0';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider profileUrl={pageProps.profileUrl ?? '/api/auth/me'}>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp
