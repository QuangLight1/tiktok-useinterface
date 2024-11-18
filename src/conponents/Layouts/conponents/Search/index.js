import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';

import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountIitem from '../AccountIitem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchaccount, setSearchAccount] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const inputRef = useRef();

  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchAccount([]);
      return;
    }
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
      .then((res) => res.json())
      .then((res) => setSearchAccount(res.data));
  }, [debounced]);

  const handlerClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handlerHidenResult = () => setShowResult(false);

  return (
    <TippyHeadless
      visible={showResult && searchaccount.length > 0}
      interactive
      placement="bottom"
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Acounts</h4>
            {searchaccount.map((item) => (
              <AccountIitem key={item.id} data={item} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handlerHidenResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && (
          <button className={cx('clear')} onClick={handlerClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        <button className={cx('search_btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
