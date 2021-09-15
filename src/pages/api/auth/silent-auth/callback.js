import {serialize} from 'cookie';

import config from '../../../../config';
import {silentAuth0} from '../../../../utils/auth0';

export default async function callback(req, res) {
    try {
        const {handleCallback} = silentAuth0();

        await handleCallback(req, res, {});
    } catch (error) {
        const {SSO_ATTEMPTED_COOKIE_NAME} = config.auth0;
        const buffer = Buffer.from(req.query.state, 'base64');
        const {returnTo} = JSON.parse(buffer.toString('utf-8'));

        res.setHeader(
            'Set-Cookie',
            serialize(SSO_ATTEMPTED_COOKIE_NAME, 'true', {path: '/'})
        );
        res.redirect(`${config.appUrl.public}${returnTo}`);
        res.status(error.status || 500).end(error.message);
    }
}
