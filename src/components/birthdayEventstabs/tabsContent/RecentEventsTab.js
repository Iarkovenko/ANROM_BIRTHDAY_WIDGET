import { getRececntBirthdayEvents } from '../../../services/api';

import WithApiRequest from './TabContentHOC';

export default WithApiRequest(getRececntBirthdayEvents);
