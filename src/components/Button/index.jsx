import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function Button(props) {
  const className = [props.className];
  if (props.isWidthAuto) className.push('w-auto');
  if (props.isBlock) className.push('block');
  if (props.hasShadow) className.push('shadow-sm');
  if (props.isWidthAuto) className.push('w-auto');
  if (props.isFlex) className.push('flex');
  if (props.isFull) className.push('w-full');
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    return (
      <span
        className={className.join(' ')}
        style={props.style}>
        {props.isLoading ? (
          <>
            <span className='spinner-border spinner-border-sm mx-5'></span>
            <span className='sr-only'>Loading....</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }
  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}>
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(' ')}
          style={props.style}
          onClick={onClick}>
          {props.children}
        </Link>
      );
    }
  }
  return (
    <button
      className={className.join(' ')}
      style={props.style}
      onClick={onClick}>
      {props.children}
    </button>
  );
}
Button.propTypes = {
  type: propTypes.oneOf(['button', 'link']),
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isLoading: propTypes.bool,
  isWidthAuto: propTypes.bool,
  isLight: propTypes.bool,
  isBlock: propTypes.bool,
  isFlex: propTypes.bool,
  isFull: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
};
