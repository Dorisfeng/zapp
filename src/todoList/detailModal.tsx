import React, { useState, ChangeEvent } from "react";
import { Modal, Input } from "antd";
import { ListItemProps } from "./interface";

type IProps = {
  item: ListItemProps | null;
  add: (item: ListItemProps) => void;
  update: (id: number, newItem: ListItemProps) => void;
};

const DetailModal: React.FC<IProps> = ({ item, add, update }): JSX.Element => {
  const [name, setName] = useState<string>(item?.name || "");
  const handleOk = () => {
    if (item) {
      update(item?.id as number, { ...(item as ListItemProps), name });
    } else {
      add({ name, id: Number(Math.random() * 10) });
    }
  };
  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <Modal visible={true} title="详情" onOk={handleOk}>
      <Input value={name} onChange={changeName} />
    </Modal>
  );
};
export default DetailModal;
