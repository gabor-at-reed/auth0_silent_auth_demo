import {auth0} from '../../../utils/auth0';

export default async function login(req, res) {
    try {
        const redirectPath = req.headers.referer;
        const {handleLogin} = await auth0();

        handleLogin(req, res, {returnTo: redirectPath});
    } catch (error) {
        res.status(error.status || 400).end(error.message);
    }
}
