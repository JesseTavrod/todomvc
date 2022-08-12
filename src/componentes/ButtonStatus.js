import React from "react";

const ButtonStatus = ( { value, setStatusList, type, statusList, setList, btnLimpa, setBtnLimpa} ) => {

  function changeStatus(type) {
    setStatusList(type);
  }

  async function clearTask() {
    await setList((list) => list.filter((item) => item.completed === false));
    await setBtnLimpa(false);
  }

  if(type !== 'clean') 
  return <button className={statusList === type && 'button-ativo'} onClick={() => changeStatus(type)}> { value } </button>;
  else return (
    <>
      { btnLimpa && <button onClick={clearTask} > { value } </button> }
    </>
  )
  
}

export default ButtonStatus;