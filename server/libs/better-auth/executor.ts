import getConfig from '../../config';
import useAuth from './better-auth';

const config = getConfig();
const auth = useAuth(config);
export { auth };
