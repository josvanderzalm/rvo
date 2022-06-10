/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';
import clsx from 'clsx';

export const argTypes = {
  kind: {
    options: ['primary', 'secondary', 'tertiary', 'quaternary'],
    control: { type: 'radio' },
  },
  size: {
    options: ['small', 'medium'],
    control: { type: 'radio' },
  },
  textContent: {
    description: 'Button text',
    control: 'text',
  },
  busy: {
    description: 'Busy',
    control: 'boolean',
  },
  focus: {
    description: 'Focus',
    control: 'boolean',
  },
  focusVisible: {
    description: 'Focus visible',
    control: 'boolean',
  },
  hover: {
    description: 'Hover',
    control: 'boolean',
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  showIcon: {
    options: ['no', 'left', 'right'],
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  kind: 'primary',
  size: 'medium',
  active: false,
  busy: false,
  disabled: false,
  focus: false,
  focusVisible: false,
  hover: false,
  textContent: 'Button',
  type: 'button',
  showIcon: 'no',
};

export const Button = ({
  kind = defaultArgs.kind,
  size = defaultArgs.size,
  active = defaultArgs.active,
  busy = defaultArgs.busy,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  hover = defaultArgs.hover,
  textContent = defaultArgs.textContent,
  type = defaultArgs.type,
  showIcon = defaultArgs.icon,
}) => {
  const icon = `<span class="rvo-button__icon--${kind}-action rvo-icon rvo-icon--plus rvo-icon--medium"></span>`;
  return `<button class="${clsx('utrecht-button', {
    'utrecht-button--primary-action': kind === 'primary',
    'utrecht-button--secondary-action': kind === 'secondary',
    'rvo-button--tertiary-action': kind === 'tertiary',
    'rvo-button--quaternary-action': kind === 'quaternary',
    'rvo-button--small': size === 'small',
    'rvo-button--medium': size === 'medium',
    'utrecht-button--active': active,
    'utrecht-button--busy': busy,
    'utrecht-button--hover': hover,
    'utrecht-button--focus': focus,
    'utrecht-button--focus-visible': focusVisible,
    'utrecht-button--disabled': disabled,
  })}"${disabled ? ' aria-disabled="true"' : ''} type="${type}">${showIcon === 'left' ? icon : ''}${textContent}${
    showIcon === 'right' ? icon : ''
  }</button>`;
};

export const AllButtonKinds = (buttonArgs) =>
  `<p>${Button({ ...buttonArgs, kind: 'primary' })}</p>
  <p>${Button({ ...buttonArgs, kind: 'secondary' })}</p>
  <p>${Button({ ...buttonArgs, kind: 'tertiary' })}</p>
  <p>${Button({ ...buttonArgs, kind: 'quaternary' })}</p>`;
