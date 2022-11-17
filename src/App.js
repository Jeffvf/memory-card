import React, {useState} from "react";
import CardGenerator from "./components/CardGenerator";

function App() {
  const [cardList, setCardList] = useState([]);
  function update(id){
    setCardList([...cardList, id]);
  }
  return (
    <div className="App">
      <p>Cards clicked: {cardList}</p>
      <CardGenerator update={update}/>
    </div>
  );
}

export default App;
