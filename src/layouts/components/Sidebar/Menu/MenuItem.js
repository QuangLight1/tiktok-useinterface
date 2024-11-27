import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ tilte, to, icon }) {
  return (
    <NavLink className={cx('menu-item')} to={to}>
      {icon}
      <span className={cx('tilte-item')}>{tilte}</span>
    </NavLink>
  );
}

MenuItem.proTypes = {
  tilte: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default MenuItem;
