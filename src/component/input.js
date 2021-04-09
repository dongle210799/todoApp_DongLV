import React,{useState} from 'react';
import onchange from '../hooks/onchange';


function  Input(props){
  const {onsubmit} = props;
  const [name1,handleChange,reset]= onchange([]);
  const [status,setStatus]=useState(false);
 
//  function  onChange(event){
//     var target = event.target;
    
//     var value = target.value;
    
//    setName1(value)

//   }
  function checkKeyPress(key){
    if (key.keyCode == "13"){
      const a ={
        name: name1,
        status: status,
      } 
     onsubmit(a);

    onClear();
    
  }
  
  }
  function onClear(){
    reset(); 
    setStatus(false);
  }
  
  return (
    
      <div>
      
				
         <div className="main">
        
        <input
        type="text" 
        className="new-todo" 
        placeholder="What needs to be done?" 
        name="name"
        value={name1}
        onChange={handleChange}
        onKeyDown={checkKeyPress}
        autoComplete="off"
        >

        </input>
        </div>


         
        
					
			</div>	
   
    
  );
}

export default Input;