import React from "react"

export default function Card({update, item}){
  return(
    <div className="card" style={{backgroundColor: item.color}} onClick={() => update(item.text)}>
      <img src={item.src} alt={item.text}/>
      <span>{item.text}</span>
    </div>
  )
}