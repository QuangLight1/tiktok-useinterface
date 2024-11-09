import classNames from 'classnames/bind';
import styles from './AccountIitem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountIitem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avata')}
        src="https://p9-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/ee24686ba8591aac062a4de7e59f042c.jpeg?lk3s=a5d48078&nonce=9405&refresh_token=c99ce8ebef804c004f2ccd2f95d09142&x-expires=1731286800&x-signature=RW586YThdj1Oy0L8R%2Bvp2fTPg7U%3D&shp=a5d48078&shcp=81f88b70"
        alt="Avata"
      />
      <div className={cx('info')}>
        <h4 className={cx('user')}>
          <span>Dinh Phu Quang</span>
          <FontAwesomeIcon className={cx('check_icon')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx('username')}>quangdinhphu</span>
      </div>
    </div>
  );
}

export default AccountIitem;
