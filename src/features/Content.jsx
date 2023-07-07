import React from 'react';
import Item from '@components/Item';

function Content(props) {
  const friendDataList = props.friendDataList
  const setOpenModal = props.setOpenModal
  const setIsEdit = props.setIsEdit
  const setSelectedId = props.setSelectedId
  const filterString = props.filterString
    
  return (
    <div className="rounded border border-b-0 border-gray-300">
      {friendDataList?.filter((friendData)=> (
        friendData.firstName.includes(filterString)
        || friendData.lastName.includes(filterString)
        || friendData.phone.includes(filterString)
      )).map((friendData) => (
        <Item
          key={friendData?.id}
          friendData={friendData}
          deleteDataHandler={props.deleteDataHandler}
          editItem={() => {
            setOpenModal(true);
            setIsEdit(true);
            setSelectedId(friendData?.id);
            console.log('function edit');
          }}
        />
      ))}
    </div>
  );
}

export default Content;
