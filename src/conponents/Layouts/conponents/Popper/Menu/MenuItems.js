import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

function MeuItems({ data, onclick }) {
  return (
    <Button to={data.to} className={cx('menu-item')} leftIcon={data.icon} onClick={onclick}>
      {data.title}
    </Button>
  );
}

export default MeuItems;
