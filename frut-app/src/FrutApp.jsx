import { useState } from "react";
function FrutApp() {

  const [items,setItem]=useState([]);
  return (
    <div>
      <div className="app">
        <div className="app__container">
          <div className="app__heading">
            Fruit App 
          </div>
          <div className="app__carousel">
            <span className="display--item">
              Apple 🍌
            </span>
            {/* <span className="display--add">
              <span>End of the List</span>
              <input type="text" className="app__carousel--input" />
            </span> */}
          </div>
          <div className="app__next">
            <button className="btn btn--primary">Next</button>
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
