import { useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/conponents/Layouts/conponents/Popper';
import styles from './Menu.module.scss';
import MeuItems from './MenuItems';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MeuItems
          key={index}
          data={item}
          onclick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };
  return (
    <TippyHeadless
      delay={[0, 700]}
      offset={[12, 8]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHidden={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </TippyHeadless>
  );
}

export default Menu;
