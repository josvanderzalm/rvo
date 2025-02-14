/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { Icon } from '../../icon/css/template';

interface IBreadcrumbItem {
  label: string;
  url?: string;
}

interface IBreadcrumbProps {
  items: IBreadcrumbItem[];
  size: string;
}

export const argTypes = {
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
};

export const defaultArgs: IBreadcrumbProps = {
  items: [
    { label: 'First step', url: '#' },
    { label: 'Second step', url: '#' },
    { label: 'Third step', url: '#' },
    { label: 'Current page' },
  ],
  size: 'sm',
};

export const Breadcrumbs: React.FC<IBreadcrumbProps> = ({ items = defaultArgs.items, size = defaultArgs.size }) => {
  return (
    <ol className={clsx('rvo-breadcrumbs', `rvo-breadcrumbs--${size}`, 'rvo-layout-row', `rvo-layout-gap--sm`)}>
      {items.map((item, index) => {
        // Parse divider markup
        let dividerMarkup = index > 0 && index < items.length && (
          <Icon color="hemelblauw" icon="delta-naar-rechts" size="xs" />
        );

        // Parse item markup
        let itemMarkup;
        let itemClassnames = ['rvo-layout-row', `rvo-layout-gap--sm`];
        if (index < items.length - 1) {
          // Not the last item
          itemMarkup = (
            <a className={clsx(itemClassnames, 'rvo-link')} href={item.url}>
              {dividerMarkup}
              {item.label}
            </a>
          );
        } else {
          // Last item
          itemMarkup = (
            <span className={clsx(itemClassnames, 'rvo-breadcrumb-current-page')}>
              {dividerMarkup}
              {item.label}
            </span>
          );
        }

        return (
          <li key="index" className="rvo-breadcrumbs-item">
            {itemMarkup}
          </li>
        );
      })}
    </ol>
  );
};
