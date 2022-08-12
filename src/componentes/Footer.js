import React from "react";
import ButtonStatus from "./ButtonStatus";

const Footer = ( { statusList, setStatusList } ) => {
  return (
    <div className="flex-2">
      <div>
        Items pendentes
      </div>
      <div>
        <ButtonStatus statusList={statusList} setStatusList={setStatusList} type="all" value="All" />
        <ButtonStatus statusList={statusList} setStatusList={setStatusList} type="active" value="Active" />
        <ButtonStatus statusList={statusList} setStatusList={setStatusList} type="completed" value="Completed" />
        <ButtonStatus type="clean" value="Limpar Tudo" />
      </div>
    </div>
  );
};


export default Footer;