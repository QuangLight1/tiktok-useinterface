import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

function MeuItems({ data, onclick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button to={data.to} className={classes} leftIcon={data.icon} onClick={onclick}>
      {data.title}
    </Button>
  );
}

export default MeuItems;
