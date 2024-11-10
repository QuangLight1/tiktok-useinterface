import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

function MeuItems({ data }) {
  return (
    <Button to="/feedback" className={cx('menu-item')} leftIcon={data.icon}>
      {data.title}
    </Button>
  );
}

export default MeuItems;
