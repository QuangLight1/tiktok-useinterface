import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import config from '~/config';
import Menu, { MenuItem } from './Menu';

import { HomeIcon, UserFollowingIcon, LiveIcon } from '~/components/Icons';
import SuggestedAccounts from '../SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem tilte="For you" to={config.routes.home} icon={<HomeIcon />} />
        <MenuItem tilte="Following" to={config.routes.following} icon={<UserFollowingIcon />} />
        <MenuItem tilte="Live" to={config.routes.live} icon={<LiveIcon />} />
      </Menu>
      <SuggestedAccounts label="Suggested Accounts" />
    </aside>
  );
}

export default Sidebar;
