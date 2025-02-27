import { useBuildtimeConfig } from '../../config';
import useAuth from './better-auth';

const config = useBuildtimeConfig();
const auth = useAuth(config);
export { auth };
