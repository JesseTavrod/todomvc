import './App.css';
import React from 'react';
import List from './componentes/List';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

function App() {
  const [statusList, setStatusList] = React.useState('all');
  const [countList, setCountList ] = React.useState(0);
  const [btnLimpa, setBtnLimpa] = React.useState(false);

  const [list, setList] = React.useState(() => {
      const local = localStorage.getItem('ITEMS');
      return local ? JSON.parse(local) : [];
    }
  );
  
  React.useEffect(() => {
    window.localStorage.setItem('ITEMS', JSON.stringify(list));
    if(list !== null) {
      setCountList(list.length);
    }

    let verifyClean = list.filter((item) => item.completed === true);
    if(verifyClean.length > 0){ setBtnLimpa(true); } else{ setBtnLimpa(false); };
  }, [list]);
    
  return (
    <section className='modal-form'>

      <Header list={list} setList={setList}  />
      
      { list &&  (
        <>
          <List 
            list={list} 
            statusList={statusList} 
            btnLimpa={btnLimpa}
            setList={setList} 
            setStatusList={setStatusList}
            setBtnLimpa={setBtnLimpa}
          />
        </>
      )}

      <Footer 
        setList={setList}
        countList={countList}
        statusList={statusList} 
        setStatusList={setStatusList} 
        btnLimpa={btnLimpa}
        setBtnLimpa={setBtnLimpa}
        />

    </section>
  );
}

export default App;
