import React from "react";

const Header = ( { setList }) => {
  const [textInput, setTextInput] = React.useState('');

  function addItemList(event) { 
    if(event.key === 'Enter'){
      if(textInput !== '') {
        let geratorId = Math.floor(Date.now() * Math.random()).toString(36);
        let newData = { id: geratorId, title: textInput, completed: false };
        setList(list => [newData, ...list]);
        setTextInput('')
      }
      return null;
    }
    return null;
  } 
  

  return (
    <>
      <h1>Todomv</h1>
      <div className='block-input d-flex'>
        <input 
          placeholder='O que precisa ser feito' 
          value={textInput} 
          onKeyDown={addItemList} 
          onChange={(event) => setTextInput(event.target.value)} 
          style={{ padding: '1rem 4rem', fontSize: "1.5rem"}}
        /> 
      </div>
    </>
  );
}

export default Header;