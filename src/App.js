import React, {useEffect, useState} from "react";
import CardGenerator from "./components/CardGenerator";

function App() {
  const [cardList, setCardList] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function update(id){
    setCardList([...cardList, id]);
  }
  const updateScoreboard = async () => {
    setCurrentScore((currentScore) => {
      if(currentScore + 1 > bestScore){
        setBestScore(currentScore + 1);
      }
      return currentScore + 1;
    })
  }
  useEffect(() => {
    const newSet = new Set(cardList);
    if(newSet.size !== cardList.length){
      setCurrentScore(0);
      setCardList([]);
    }
    else if(cardList.length){
      updateScoreboard();
    }
  }, [cardList]);
  return (
    <div className="App">
      <p>Score: {currentScore} Best Score: {bestScore}</p>
      <CardGenerator update={update}/>
    </div>
  );
}

export default App;
