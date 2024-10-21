import React from "react";

import { ListItem } from "../../types/componets";



type ListProps = {
    items: ListItem[]
    itemClassName?: string,
    itemTitleClassName?: string
}
const List: React.FC<ListProps> = ({
    items,
    itemClassName = 'about-item',
    itemTitleClassName = 'span'
}) => {
    return items.length ? (
        <ul>
            {items.map((item, index) => <li key={index} className={itemClassName}>
                {item.icon}
                <span className={itemTitleClassName}>{item.title}</span>
            </li>)}
            {/* <li>
            </li>  */}
        </ul>
    ) : null
}

export default List;
