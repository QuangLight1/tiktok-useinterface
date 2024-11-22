import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCircleQuestion,
  faCloudArrowUp,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMoon,
  faPlus,
  faRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import routesConfig from '~/config/routes';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Button from '../Button';
import Menu from '../Popper/Menu';
import Search from '../Search';

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
    to: '/setting',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>,
    title: 'Dark Mode',
  },
];

function Header() {
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
      title: 'View Profile',
      to: '/@quangdinhphu',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
      title: 'Get coins',
      to: '/coin',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  const currentUser = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={routesConfig.home}>
          <img className={cx('logo-link')} src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy trigger="click" content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button to="/upload" upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button target="_blank" primary>
                Đăng nhập
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS}>
            {currentUser ? (
              <img
                className={cx('user-avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/ee24686ba8591aac062a4de7e59f042c.jpeg?lk3s=a5d48078&nonce=9405&refresh_token=c99ce8ebef804c004f2ccd2f95d09142&x-expires=1731286800&x-signature=RW586YThdj1Oy0L8R%2Bvp2fTPg7U%3D&shp=a5d48078&shcp=81f88b70"
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
