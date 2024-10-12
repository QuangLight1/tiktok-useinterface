import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/image';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <div className={cx('search')}>
          <input placeholder="Search accounts and video" spellCheck={false} />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
          </button>
          <button className={cx('spinner')}>
            <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
          </button>
          <button className={cx('search_btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button>
        </div>
        <div className={cx('action')}></div>
      </div>
    </header>
  );
}

export default Header;
