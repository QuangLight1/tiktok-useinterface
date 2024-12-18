import PropTypes from 'prop-types';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';

import * as searchServices from '~/Services/searchService';
import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountIitem from '../AccountIitem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchaccount, setSearchAccount] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const inputRef = useRef();

  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchAccount([]);
      return;
    }

    const fetchApi = async () => {
      const result = await searchServices.search(debounced);
      setSearchAccount(result);
    };

    fetchApi();
  }, [debounced]);

  const handlerClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handlerHidenResult = () => setShowResult(false);
  const handlerChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };
  return (
    <div>
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
            onChange={handlerChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && (
            <button className={cx('clear')} onClick={handlerClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          <button className={cx('search_btn')} onMouseDown={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default Search;
