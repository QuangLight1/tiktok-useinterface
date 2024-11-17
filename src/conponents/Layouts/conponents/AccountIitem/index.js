import classNames from 'classnames/bind';
import styles from './AccountIitem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountIitem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avata')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <h4 className={cx('user')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check_icon')} icon={faCheckCircle}></FontAwesomeIcon>}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </div>
  );
}

export default AccountIitem;
