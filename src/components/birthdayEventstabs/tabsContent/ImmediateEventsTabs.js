import { getImmediateBirthdayEvents } from '../../../services/api';

import WithApiRequest from './TabContentHOC';

export default WithApiRequest(getImmediateBirthdayEvents);
