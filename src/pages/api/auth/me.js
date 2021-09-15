import {auth0} from '../../../utils/auth0';

export default async function me(req, res) {
    try {
        const {handleProfile, getSession} = auth0();
        const session = getSession(req, res);

        if (session) {
            await handleProfile(req, res, {});
        } else {
            res.status(200).end('No session');
        }
    } catch (error) {
        res.status(error.status || 500).end(error.message);
    }
}
