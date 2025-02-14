/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { FormFieldDescription } from '@utrecht/component-library-react';
import React from 'react';
import './index.scss';
import { Icon } from '../../icon/css/template';

interface IFeedbackProps {
  text: string;
  type: string;
}

export const argTypes = {
  text: { control: 'text' },
  type: {
    options: ['warning', 'error'],
    control: { type: 'radio' },
  },
};

export const defaultArgs: IFeedbackProps = {
  text: 'Dit is een melding.',
  type: 'warning',
};

export const FormFeedback: React.FC<IFeedbackProps> = ({ text = defaultArgs.text, type = defaultArgs.type }) => {
  if (type === 'warning') {
    return (
      <FormFieldDescription
        warning
        className="rvo-form-feedback rvo-form-feedback--warning rvo-layout-row rvo-layout-gap--sm"
      >
        <Icon icon="waarschuwing" size="md" classNames={['rvo-status-icon-waarschuwing']} />
        {text}
      </FormFieldDescription>
    );
  } else {
    return (
      <FormFieldDescription
        invalid
        className="rvo-form-feedback rvo-form-feedback--error rvo-layout-row rvo-layout-gap--sm"
      >
        <Icon icon="foutmelding" size="md" classNames={['rvo-status-icon-foutmelding']} />
        {text}
      </FormFieldDescription>
    );
  }
};
