import React from "react";

const ButtonStatus = ( { value, setStatusList, type, statusList} ) => {

  function changeStatus(type) {
    setStatusList(type);
  }

  function clearTask() {

  }

  if(type !== 'clean') 
  return <button className={statusList === type && 'button-ativo'} onClick={() => changeStatus(type)}> { value } </button>;
  else return <button onClick={() => clearTask} > { value } </button>;
  
}

export default ButtonStatus;