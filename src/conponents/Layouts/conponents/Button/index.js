import { Link, matchRoutes } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({
  to,
  href,
  onClick,
  primary,
  outline,
  upload,
  rightIcon,
  leftIcon,
  children,
  rounded,
  small,
  large,
  ...passProps
}) {
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
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
    </Comp>
  );
}

export default Button;
