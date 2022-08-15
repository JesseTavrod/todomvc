import React from "react";
import ButtonStatus from "./ButtonStatus";

const Footer = ( { statusList, setStatusList, countList, setList, btnLimpa, setBtnLimpa } ) => {
  return (
    <div className="flex-2">
      <div>
        {countList} Items pendentes
      </div>
      <div>
        <ButtonStatus statusList={statusList} setStatusList={setStatusList} type="all" value="Todas" />
        <ButtonStatus statusList={statusList} setStatusList={setStatusList} type="active" value="Ativas" />
        <ButtonStatus statusList={statusList} setStatusList={setStatusList} type="completed" value="Completas" />
        <ButtonStatus 
          setList={setList}  
          btnLimpa={btnLimpa}
          setBtnLimpa={setBtnLimpa}
          type="clean" value="Limpar Tudo" 
        />
      </div>
    </div>
  );
};


export default Footer;