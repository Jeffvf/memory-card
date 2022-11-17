import React from "react"

export default function Card({update, item}){
  return(
    <div className="card" onClick={() => update(item.text)}>
      <img src={item.src} />
      <span>{item.text}</span>
    </div>
  )
}