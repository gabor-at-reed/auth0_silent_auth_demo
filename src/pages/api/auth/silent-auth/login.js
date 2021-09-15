import {silentAuth0} from '../../../../utils/auth0';

export default async function login(req, res) {
    try {
        const {handleLogin} = silentAuth0();

        await handleLogin(req, res);
    } catch (error) {
        res.status(error.status || 400).end(error.message);
    }
}
