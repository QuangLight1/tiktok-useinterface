import { Link, matchRoutes } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Button({ to, href, onClick, primary, outline, upload, children, rounded, small, large, ...passProps }) {
  let Comp = 'button';

  const classes = cx('wrapper', {
    primary,
    outline,
    upload,
    small,
    large,
    rounded,
  });

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp className={classes} {...props}>
      {upload && <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px' }}></FontAwesomeIcon>}
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
