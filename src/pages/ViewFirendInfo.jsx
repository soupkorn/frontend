import React, { useEffect, useState } from 'react';
import CreateUser from '@features/CreateUser';
import Header from '@features/Header';
import Content from '@features/Content';
import Filter from '@features/Filter';
import Modal from '@components/Modal';

const mockFriendDataList = [
  { id: '1', firstName: 'test1', lastName: 'test1', phone: '0000000001' },
  { id: '2', firstName: 'hello', lastName: 'hello', phone: '0000000002' },
  { id: '3', firstName: 'test1', lastName: 'test1', phone: '0000000003' },
];

let count =3;

function ViewFirendInfo() {
  const [friendDataList, setFriendDataList] = useState(mockFriendDataList);
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId,setSelectedId] = useState(count);
  const [filterString,setFilterString] = useState("");

  const validateData = () => {
    try {
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  const getDataByID = () => {
    try {
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  const createNewDataHandler = (data) => {
    try {
      console.log('Create Function');
      const newData = {...data, id: ++count }
      console.log(newData)
      setFriendDataList([...friendDataList,newData])
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  const editDataHandler = (id, data) => {
    try {
      console.log('Edit Function');
      // You can write code under this line.
      const newfriendDataList = [...friendDataList];
      const index = newfriendDataList.findIndex((e) => e.id === id);
      newfriendDataList[index] = { ...data };
      setFriendDataList(newfriendDataList);

    } catch (err) {
      // handler error
    }
  };

  const deleteDataHandler = (id) => {
    try {
      // You can write code under this line.
      const newFriendDataList = friendDataList.filter((e) => e.id !== id);
      setFriendDataList(newFriendDataList);
    } catch (err) {
      // handler error
    }
  };

  // optional Bonus point if you can do filter function
  const filterDataHandler = () => {
    try {
      console.log('Filter Function');
      // do some thing
    } catch (err) {
      // handler error
    }
  };

  return (
    <div className="m-20 flex justify-center">
      <div className="flex flex-col justify-center gap-8 ">
        <Header />
        <CreateUser setOpenModal={setOpenModal} />
        <Filter 
          setFilterString={setFilterString}
        />
        <Content
          friendDataList={friendDataList}
          openModal={openModal}
          setOpenModal={setOpenModal}
          setIsEdit={setIsEdit}
          deleteDataHandler={deleteDataHandler}
          setSelectedId={setSelectedId}
          filterString={filterString}
        />
        <Modal
          friendDataObj={friendDataList[friendDataList.findIndex(e=>e.id===selectedId)]}
          // friendDataObj={friendDataList[1]}
          setOpenModal={setOpenModal}
          openModal={openModal}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          createNewDataHandler={createNewDataHandler}
          editDataHandler={editDataHandler}
          setSelectedId={setSelectedId}
        />
      </div>
    </div>
  );
}

export default ViewFirendInfo;
