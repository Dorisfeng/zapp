import React from "react";
import { ListItemProps } from "./interface";
import Detail from "./detailModal";
import { ifError } from "assert";
type IProps = {
  itemData: ListItemProps;
  del: (id: number) => void;
  edit: (item: ListItemProps) => void;
};

const Item: React.FC<IProps> = ({ itemData, del, edit }): JSX.Element => {
  return (
    <div className="list-item" key={itemData.id}>
      <div>name:{itemData.name}</div>
      <div className="options">
        <button
          onClick={() => {
            edit(itemData);
          }}
        >
          编辑
        </button>
        <button onClick={() => del(itemData.id)}>删除</button>
      </div>
    </div>
  );
};

export default Item;
