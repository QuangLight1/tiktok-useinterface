import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/image';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountIitem from '../AccountIitem';
import Button from '../Button';

const cx = classNames.bind(styles);

function Header() {
  const [searchaccount, setSearchAccount] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchAccount([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <TippyHeadless
          visible={searchaccount.length > 0}
          interactive
          placement="bottom"
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Acounts</h4>
                <AccountIitem />
                <AccountIitem />
                <AccountIitem />
                <AccountIitem />
                <AccountIitem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
              onChange={(e) => setSearchAccount(e.target.value)}
            />

            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <button className={cx('search_btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </TippyHeadless>

        <div className={cx('action')}>
          <Button upload>Upload</Button>
          <Button target="_blank" primary rounded>
            Đăng nhập
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
