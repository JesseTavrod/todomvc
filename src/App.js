import './App.css';
import React from 'react';
import List from './componentes/List';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

function App() {
  const [statusList, setStatusList] = React.useState('all');

  const [list, setList] = React.useState(() => {
      const local = localStorage.getItem('ITEMS');
      return local ? JSON.parse(local) : [];
    }
  );
  
  React.useEffect(() => {
    window.localStorage.setItem('ITEMS', JSON.stringify(list));
  }, [list]);
    
  return (
    <section className='modal-form'>

      <Header list={list} setList={setList}  />
      
      { list &&  (
        <>
          <List 
            list={list} 
            setList={setList} 
            statusList={statusList} 
            setStatusList={setStatusList}
          />
        </>
      )}

      <Footer 
        statusList={statusList} 
        setStatusList={setStatusList} 
      
        />

    </section>
  );
}

export default App;
