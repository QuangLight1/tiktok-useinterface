import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import stypes from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(stypes);

function SuggestedAccounts({ label }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      <AccountItem />
      <AccountItem />
      <AccountItem />
    </div>
  );
}

SuggestedAccounts.proTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
