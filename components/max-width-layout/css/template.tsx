/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import * as designTokens from '@nl-rvo/design-tokens/dist';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

interface IMaxWidthLayoutProps {
  size?: string;
  content?: string;
  className?: string | string[];
}

export const argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  content: {
    control: 'text',
  },
};

export const defaultArgs: IMaxWidthLayoutProps = {
  size: 'md',
  content: 'Deze gecentreerde layout container heeft een maximale breedte van {maxWidth}.',
};

export const MaxWidthLayout: React.FC<PropsWithChildren<IMaxWidthLayoutProps>> = ({
  size,
  content,
  children,
  className = [],
}) => {
  let parsedContent = content || children;
  if (typeof parsedContent === 'string' && parsedContent.indexOf('{maxWidth}') > -1) {
    let maxWidth;
    switch (size) {
      case 'sm':
        maxWidth = designTokens.rvoLayoutMaxWidthSm;
        break;
      case 'md':
        maxWidth = designTokens.rvoLayoutMaxWidthMd;
        break;
      case 'lg':
        maxWidth = designTokens.rvoLayoutMaxWidthLg;
        break;
    }
    parsedContent = parsedContent.replace(/{maxWidth}/g, maxWidth);
  }

  return (
    <div className={clsx('rvo-max-width-layout', `rvo-max-width-layout--${size}`, className)}>{parsedContent}</div>
  );
};
