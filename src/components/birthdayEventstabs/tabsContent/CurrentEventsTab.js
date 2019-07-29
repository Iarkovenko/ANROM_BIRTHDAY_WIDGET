import { getCurrentBirthdayEvents } from '../../../services/api';

import WithApiRequest from './TabContentHOC';

export default WithApiRequest(getCurrentBirthdayEvents);
