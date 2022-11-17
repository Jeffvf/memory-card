import Card from "./Card";
import React, { useEffect, useState } from "react";
import data from "../utils/card-items.json";
import uniqid from "uniqid";

export default function CardGenerator({update}){
  const initialState = data.characters.map((characters) => {
    return {"text": characters.text, "src": characters.src, "color": characters.color, "id": uniqid()}
  });
  const [cardList, setCardList] = useState(initialState);

  useEffect(() => {
      setCardList(cardList.sort(() => Math.random() - 0.5));
  })
  return (
    <div className="cards">
      {cardList.map((item, i) => {
        return <Card update={update} key={item.id} item={item}></Card>
      })}
    </div>
  )
}