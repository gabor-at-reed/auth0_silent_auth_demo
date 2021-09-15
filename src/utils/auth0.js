// More info: https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md#create-your-own-instance-of-the-sdk
import {initAuth0} from '@auth0/nextjs-auth0';

import config from '../config';

export const auth0 = () => {
    const init = {
        secret: process.env.AUTH0_SECRET,
        baseURL: process.env.AUTH0_BASE_URL,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
    };

    return initAuth0(init);
};

export const silentAuth0 = () => {
    const init = {
        secret: process.env.AUTH0_SECRET,
        baseURL: process.env.AUTH0_BASE_URL,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
        authorizationParams: {
            client_id: process.env.AUTH0_CLIENT_ID,
            prompt: 'none',
            redirect_uri: `${config.apiUrl.public}/api/auth/silent-auth/callback`
        }
    };

    return initAuth0(init);
};

export const clearAuthEnvs = () => {
    process.env.AUTH0_SECRET = null;
    process.env.AUTH0_BASE_URL = null;
    process.env.AUTH0_CLIENT_ID = null;
    process.env.AUTH0_CLIENT_SECRET = null;
    process.env.AUTH0_ISSUER_BASE_URL = null;

    return true;
};
