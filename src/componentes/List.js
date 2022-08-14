import React from "react";
import CheckIco from '../check.ico';

const List = ({list, setList, statusList, btnLimpa, setBtnLimpa}) => {
  const [showList, setShowList] = React.useState([]);

  function changeTaskStatus(index){
    let temp_state = [...list];
    let temp_element = { ...list[index] };
    temp_element.completed = !temp_element.completed;
    temp_state[index] = temp_element;
    setList(temp_state);

    let verifyClean = temp_state.filter((item) => item.completed === true);
    if(verifyClean.length > 0){ setBtnLimpa(true); } else{ setBtnLimpa(false); };
  }
  
  function removeTaskList(id){
    let array = list.filter((list) => list.id !== id);
    setList(array);
  }

  function updateValue(event, index) {
    let temp_state = [...list];
    let temp_element = { ...list[index] };
    temp_element.title = event.target.value;
    temp_state[index] = temp_element;
    setList(temp_state);
  }

  React.useEffect(() => {
    let arrayList;

    if(statusList === 'all'){
      arrayList = list;
    } 
    if(statusList === 'active') {
      arrayList = list.filter((list) => list.completed === false);
    }
    if(statusList === 'completed') {
      arrayList = list.filter((list) => list.completed !== false);
    }
    setShowList(arrayList);
  }, [statusList, list]);

  return(
    <section className="list-task">
      {showList !== [] && showList && showList.map(({id, title, completed}, index) => (
        <div className='block-input d-flex' key={id} >
          <button 
            className="button-status"  
            onClick={() => changeTaskStatus(index)} > 
            <img 
            style={{ opacity: completed === true && '1'}}
            className="icon" src={CheckIco} alt="check" width={25} height={25} /> 
          </button>
          
          <input 
            defaultValue={title} 
            style={ { color: completed === true && 'green'}} 
            onChange={(event) => updateValue(event, index)}
            />
          
          <button 
              className="button-remove" 
              onClick={() => removeTaskList(id)} 
            > 
            <span className="icon"> X </span> 
          </button>

        </div>
      ))}
    </section>
  );
}

export default List;