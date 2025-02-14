/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Button } from '../../button/css/template';
import { Icon } from '../../icon/css/template';
import { Link } from '../../link/css/template';
import { StatusIcon } from '../../status-icon/css/template';
import validateHTML from '../../utils/validateHTML';

export interface IAlertProps {
  kind?: string;
  heading?: string;
  content?: string | React.ReactNode;
  closable?: boolean;
}

export const argTypes = {
  kind: {
    options: ['info', 'warning', 'error', 'success'],
    control: { type: 'radio' },
  },
  heading: {
    control: 'text',
  },
  content: {
    control: 'text',
  },
  closable: {
    control: 'boolean',
  },
};

const linkMarkup = ReactDOMServer.renderToStaticMarkup(Link({ content: 'link', url: '#' }));

export const defaultArgs: IAlertProps = {
  kind: 'info',
  heading: '',
  content: `This is an example of an alert, with a ${linkMarkup} inside.`,
  closable: false,
};

export const Alert: React.FC<IAlertProps> = ({
  kind = defaultArgs.kind,
  heading = defaultArgs.heading,
  content = defaultArgs.content,
  closable = defaultArgs.closable,
}) => {
  let iconMarkup;
  switch (kind) {
    case 'info':
      iconMarkup = StatusIcon({ type: 'info', size: 'xl' });
      break;
    case 'warning':
      iconMarkup = StatusIcon({ type: 'waarschuwing', size: 'xl' });
      break;
    case 'error':
      iconMarkup = StatusIcon({ type: 'foutmelding', size: 'xl' });
      break;
    case 'success':
      iconMarkup = StatusIcon({ type: 'bevestiging', size: 'xl' });
      break;
  }

  // Parse content markup (either a string, HTML string or React node)
  let contentMarkup = <div>{content}</div>;
  if (typeof content === 'string' && content.length && validateHTML(content)) {
    contentMarkup = <div dangerouslySetInnerHTML={{ __html: content }}></div>;
  }

  return (
    <div className={clsx('rvo-alert', `rvo-alert--${kind}`)}>
      {iconMarkup}
      <div className="rvo-alert-text">
        {heading?.length > 0 && <strong>{heading}</strong>}
        {contentMarkup}
      </div>
      {closable && (
        <Button kind="subtle" classNames={['rvo-button--close']}>
          <Icon icon="kruis" size="md" />
        </Button>
      )}
    </div>
  );
};

export const AllAlertKinds: React.FC<IAlertProps> = (alertArgs) => (
  <div className="rvo-layout-column rvo-layout-gap--md">
    <Alert {...alertArgs} kind="info" />
    <Alert {...alertArgs} kind="warning" />
    <Alert {...alertArgs} kind="error" />
    <Alert {...alertArgs} kind="success" />
  </div>
);
