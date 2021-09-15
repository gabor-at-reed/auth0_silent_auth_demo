import cookie, {serialize} from 'cookie';

import config from '../config';

const checkForSSO = (contextObj, sessionObj) => {
    const {SSO_ATTEMPTED_COOKIE_NAME} = config.auth0;
    const cookies = cookie.parse(contextObj.req.headers.cookie || '');
    const {SSOAttempted} = cookies;
    let returnValue;

    if (sessionObj) {
        contextObj.res.setHeader(
            'Set-Cookie',
            serialize(SSO_ATTEMPTED_COOKIE_NAME, '', {
                maxAge: -1,
                path: '/'
            })
        );
        returnValue = false;
    }

    if (!sessionObj && SSOAttempted !== 'true') {
        returnValue = true;
    }

    if (!sessionObj && SSOAttempted === 'true') {
        contextObj.res.setHeader(
            'Set-Cookie',
            serialize(SSO_ATTEMPTED_COOKIE_NAME, 'false', {path: '/'})
        );
        returnValue = false;
    }

    return returnValue;
};

export default checkForSSO;
