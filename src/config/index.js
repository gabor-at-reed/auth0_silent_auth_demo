const projectName = process.env.PROJECT_NAME || 'auth0_silent_auth_demo';

let config = {
    projectName,
    auth0: {
        profileUrl: process.env.NEXT_PUBLIC_AUTH0_PROFILE || '/api/auth/me',
        login: '/api/auth/login',
        logout: '/api/auth/logout',
        slientLogin: '/api/auth/silent-auth/login?returnTo=',
        AUTH0_BASE_URL: 'http://localhost:3000',
        AUTH0_ISSUER_BASE_URL: 'https://secure-dev.reedlabs.co.uk',
        SSO_ATTEMPTED_COOKIE_NAME: 'SSOAttempted',
        enableSSOFeature: true
    },
    appUrl: {
        local: 'http://localhost:3000',
        internal: 'http://localhost:3000',
        public: 'http://localhost:3000'
    },
    apiUrl: {
        base: '',
        local: 'http://localhost:3000',
        public: 'http://localhost:3000'
    }
};

export default config;
