/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import './index.scss';
import { Icon } from '../../icon/css/template';
import validateHTML from '../../utils/validateHTML';

export interface ITableColumnProps {
  label: string;
  type?: 'numeric';
  sortable?: boolean;
  sortDirection?: 'ASC' | 'DESC' | '';
}

export interface ITableProps {
  description: string;
  columns: ITableColumnProps[];
  rows: string[][];
}

export const argTypes = {
  description: {
    control: 'text',
  },
  columns: {
    type: {
      name: 'array',
      required: true,
    },
  },
  rows: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const defaultArgs: ITableProps = {
  description: 'Table description.',
  columns: [
    { label: 'Title' },
    { label: 'Text', sortable: true, sortDirection: 'ASC' },
    { label: 'Price ($)', type: 'numeric' },
    { label: '' },
  ],
  rows: [
    ['Title value 1', 'Text value 1', '57', '<a href="#" class="rvo-link">Link 1</a>'],
    ['Title value 2', 'Text value 2', '12.50', '<a href="#" class="rvo-link">Link 2</a>'],
    ['Title value 3', 'Text value 3', '90', '<a href="#" class="rvo-link">Link 3</a>'],
    ['Title value 4', 'Text value 4', '1.50', '<a href="#" class="rvo-link">Link 4</a>'],
  ],
};

export const Table: React.FC<ITableProps> = ({
  description = defaultArgs.description,
  columns = defaultArgs.columns,
  rows = defaultArgs.rows,
}) => {
  return (
    <div className="rvo-table--responsive">
      <table className="rvo-table">
        <caption className="rvo-caption">{description}</caption>
        <thead className="rvo-table-head">
          <tr className="rvo-table-row">
            {columns.map((column, index) => {
              let icon: string;
              if (column.sortDirection === 'ASC') {
                icon = 'delta-omhoog';
              } else if (column.sortDirection === 'DESC') {
                icon = 'delta-omlaag';
              } else {
                icon = '';
              }

              return (
                <th
                  key={index}
                  scope="col"
                  className={clsx(
                    'rvo-table-header',
                    column.sortable && 'rvo-table-header--sortable',
                    column.sortable && column.sortDirection.length > 1 && ['rvo-layout-row', 'rvo-layout-gap--sm'],
                    column.type === 'numeric' && 'rvo-table-header--numeric',
                  )}
                >
                  {column.label}
                  {column.sortable && column.sortDirection.length > 0 && (
                    <Icon size="sm" color="hemelblauw" icon={icon} />
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="rvo-table-body">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="rvo-table-row">
              {columns.map((column, columnIndex) => {
                const cellValue = row[columnIndex];
                const cellClassNames = clsx('rvo-table-cell', column.type === 'numeric' && 'rvo-table-cell--numeric');

                // Parse cell markup (value is either string, HTML string or React node)
                let cellMarkup = (
                  <td key={columnIndex} className={cellClassNames}>
                    {cellValue}
                  </td>
                );

                if (typeof cellValue === 'string' && cellValue.length && validateHTML(cellValue)) {
                  cellMarkup = (
                    <td key={columnIndex} className={cellClassNames} dangerouslySetInnerHTML={{ __html: cellValue }} />
                  );
                }

                return cellMarkup;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
