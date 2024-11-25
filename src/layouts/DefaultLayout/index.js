import classNames from 'classnames/bind';
import Header from '~/layouts/conponents/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <main className={cx('content')}>{children}</main>
      </div>
    </div>
  );
}

export default DefaultLayout;