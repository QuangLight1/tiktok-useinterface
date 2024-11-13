import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faMoon,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/image';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountIitem from '../AccountIitem';
import Button from '../Button';
import Menu from '../Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: 'Tiếng Việt',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'ja',
          title: 'Nhật Bản',
        },
        {
          code: 'Ch',
          title: 'Trung Quốc',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: 'Keyboard and Shortcut',
  },
  {
    icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
    title: 'Setting',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>,
    title: 'Dark Mode',
  },
];

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
          <Button to="/upload" upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button target="_blank" primary>
            Đăng nhập
          </Button>
          <Menu items={MENU_ITEMS}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
