/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import React from 'react';

export interface ICheckboxProps extends React.DOMAttributes<any> {
  id?: string;
  name?: string;
  labelText: string;
  checked?: boolean;
  hover?: boolean;
  disabled?: boolean;
  active?: boolean;
  focus?: boolean;
  indeterminate?: boolean;
  invalid?: boolean;
  required?: boolean;
  value?: string;
}

export const argTypes = {
  id: { control: 'text' },
  name: { control: 'text' },
  labelText: { control: 'text' },
  checked: { control: 'boolean' },
  hover: { control: 'boolean' },
  disabled: { control: 'boolean' },
  active: { control: 'boolean' },
  focus: { control: 'boolean' },
  indeterminate: { control: 'boolean' },
  invalid: { control: 'boolean' },
  required: { control: 'boolean' },
  value: { control: 'text' },
};

export const defaultArgs: ICheckboxProps = {
  id: 'field',
  name: 'group',
  labelText: 'Label',
  checked: false,
  hover: false,
  disabled: false,
  active: false,
  focus: false,
  indeterminate: false,
  invalid: false,
  required: false,
  value: '',
};

export const Checkbox: React.FC<ICheckboxProps> = ({
  id = defaultArgs.id,
  name = defaultArgs.name,
  labelText = defaultArgs.labelText,
  checked = defaultArgs.checked,
  hover = defaultArgs.hover,
  disabled = defaultArgs.disabled,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  indeterminate = defaultArgs.indeterminate,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  value = defaultArgs.value,
  ...otherProps
}) => (
  <label
    className={clsx(
      'rvo-checkbox',
      active && 'rvo-checkbox--active',
      hover && 'rvo-checkbox--hover',
      checked && 'rvo-checkbox--checked',
      !checked && 'rvo-checkbox--not-checked',
      disabled && 'rvo-checkbox--disabled',
      focus && 'rvo-checkbox--focus-visible',
      invalid && 'rvo-checkbox--invalid',
      indeterminate && 'rvo-checkbox--indeterminate',
      required && 'rvo-checkbox--required',
      'rvo-layout-row',
      'rvo-layout-gap--sm',
    )}
    htmlFor={id}
  >
    <input
      id={id}
      name={name}
      className="rvo-checkbox__input"
      type="checkbox"
      defaultChecked={checked || null}
      disabled={disabled || null}
      required={required || null}
      defaultValue={value || ''}
      {...otherProps}
    />
    {labelText}
  </label>
);
