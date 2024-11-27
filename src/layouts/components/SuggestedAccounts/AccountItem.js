import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <img
        className={cx('avata')}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/f121e4d0113bbd49afa6c634737d5e41~c5_100x100.jpeg?lk3s=a5d48078&nonce=70072&refresh_token=05fcead27b0794952dfe17a7580bd710&x-expires=1732888800&x-signature=3OO8TnX4N6TQNC7q2K38qdzKU7Q%3D&shp=a5d48078&shcp=81f88b70"
        alt=""
      />

      <div className={cx('info')}>
        <p className={cx('nickname')}>
          <strong>dinhphuquang</strong>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('icon-check')}></FontAwesomeIcon>
        </p>
        <p className={cx('name')}>Dinh Phu Quang</p>
      </div>
    </div>
  );
}

export default AccountItem;
