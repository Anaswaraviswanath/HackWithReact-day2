import { useState } from "react";
function FrutApp() {

  const [items,setItem]=useState(["Apple 🍌","Watermelon 🍍","Rambutan🍎"]);
  const [itemNo, setItemNo] = useState(0);
  const [itemInput, setItemInput] = useState('');

  const currentFrut=items[itemNo];
  const handleNextClick=()=>{
    setItemNo(itemNo+1);
  }
  const handleResetClick=()=>{
    setItemNo(0);
  }
  const handleInput=(event)=>{
    setItemInput(event.target.value);
  }
  
  return (
    <div>
      <div className="app">
        <div className="app__container">
          <div className="app__heading">
            Fruit App 
          </div>
          <div className="app__carousel">
            <span className="display--item">
              {currentFrut}
            </span>
            {/* <span className="display--add">
              <span>End of the List</span>
              <input type="text" className="app__carousel--input" />
            </span> */}
          </div>
          <div className="app__next">
            { currentFrut ?
            <button onClick={handleNextClick} className="btn btn--primary">Next</button>
            :<button onClick={handleNextClick} className="btn btn--primary">Goto start</button>
}
            </div>
            <div className="app__add">
            <button className="btn btn--secondary">Add</button>
          </div>
     </div>
     <div className="footer">
     &copy;2022 Hack with React designed by Anaswara viswanath
     </div>
      </div>
    </div>
  );
}

export default FrutApp;
