import React, { useContext } from 'react'
import { AdminFlagContext } from './providers/AdminFlagProviders';

const style = {
    width : "100px",
    padding: "6px",
    borderRadius : "8px"
};

function EditButton() {
  const {isAdmin} = useContext(AdminFlagContext);
  console.log(isAdmin);

  return (
    <div>
        <button style={style} disabled={!isAdmin}>編集</button>
    </div>
  )
}

export default EditButton