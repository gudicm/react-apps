import React from 'react';

import { ListItem } from '../../types/components';

type ListProps = {
  items: ListItem[];
  listClassName?: string;
  itemFirstClassName?: string;
  itemClassName?: string;
  itemLabelClassName?: string;
  tag?: 'span' | 'p';
};
const List: React.FC<ListProps> = ({
  items,
  listClassName = '',
  itemFirstClassName = '',
  itemClassName = 'about-item',
  itemLabelClassName = 'span',
  tag = 'span',
}) => {
  return items.length ? (
    <ul className={listClassName}>
      {tag === 'span'
        ? items.map((item, index) => (
            <li key={index} className={itemClassName}>
              {item.icon}
              <span className={itemLabelClassName}>{item.label}</span>
            </li>
          ))
        : tag === 'p' &&
          items.map((item, index) =>
            index === 0 && itemFirstClassName !== '' ? (
              <li key={index} className={itemFirstClassName}>
                {item.label}
              </li>
            ) : (
              <li key={index} className={itemClassName}>
                <p className={itemLabelClassName}>{item.label}</p>
              </li>
            )
          )}
    </ul>
  ) : null;
};

export default List;
