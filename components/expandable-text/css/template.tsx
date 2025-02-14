/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Icon } from '../../icon/css/template';
import validateHTML from '../../utils/validateHTML';

interface IExpandableTextProps {
  title: string;
  text: string | React.ReactNode;
  open?: boolean;
}

export const argTypes = {
  title: {
    control: 'text',
  },
  text: {
    control: 'text',
  },
  open: {
    control: 'boolean',
  },
};

export const defaultArgs: IExpandableTextProps = {
  title: 'Expandable text title',
  text: 'Expandable text content',
  open: false,
};

export const ExpandableText: React.FC<IExpandableTextProps> = ({
  title = defaultArgs.title,
  text = defaultArgs.text,
  open = defaultArgs.open,
}) => {
  let textMarkup = <span className="rvo-expandable-text__details">{text}</span>;
  if (typeof text === 'string' && text.length && validateHTML(text)) {
    textMarkup = <span className="rvo-expandable-text__details" dangerouslySetInnerHTML={{ __html: text }}></span>;
  }

  return (
    <details className="rvo-expandable-text" open={open || null}>
      <summary className="rvo-expandable-text__summary">
        <Icon color="hemelblauw" size="md" icon="info" />
        {title}
      </summary>
      {textMarkup}
    </details>
  );
};
