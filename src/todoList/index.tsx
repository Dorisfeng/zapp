import { useState } from "react";
import { Button } from "antd";
import { data } from "./mock";
import ListItem from "./listItem";
import Detail from "./detailModal";
import { ListItemProps } from "./interface";

import "./index.scss";

const Demo = () => {
  const [listData, setListData] = useState<ListItemProps[]>(data);
  const [show, toggleShow] = useState<boolean>(false);
  const [item, setItem] = useState<ListItemProps | null>(null);

  const addItem = (item: ListItemProps) => {
    setItem(null);
    const new_listData = [...listData, item];
    setListData(new_listData);
    toggleShow(false);
  };

  const deleteItem = (id: number) => {
    const new_listData = listData.filter(
      (item: ListItemProps) => item.id !== id
    );
    setListData(new_listData);
  };

  const showItem = (item: ListItemProps) => {
    setItem(item);
    showDetail();
  };
  const updateItem = (id: number, newItem: ListItemProps) => {
    let index = listData.findIndex((item) => item.id === id);
    listData[index] = { ...listData[index], ...newItem };
    setListData(listData);
    toggleShow(false);
  };

  const showDetail = () => {
    toggleShow(true);
  };
  return (
    <div>
      {listData.map((item: ListItemProps) => {
        return <ListItem itemData={item} del={deleteItem} edit={showItem} />;
      })}
      <Button type="primary" onClick={showDetail}>
        新增
      </Button>
      {show && <Detail add={addItem} item={item} update={updateItem} />}
    </div>
  );
};

export default Demo;
