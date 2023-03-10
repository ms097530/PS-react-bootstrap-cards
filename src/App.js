import React from "react";
import "./styles.css";
//import card1
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Counter from "./components/Counter";

import cardsArr from './data'

console.log('this is cardsArr: ', cardsArr)

export default function App()
{
  const cards = cardsArr.map((cardData, index) =>
  {
    return (
      <Card
        key={index}
        {...cardData}
      />
    )
  })

  console.log('this is cards: ', cards)

  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {/* using array from above */}
        {cards}

        {/* constructing array to render in place */}
        {/* {
          cardsArr.map((cardData, i) =>
          {
            return (
              <Card1
                img={cardData.img}
                title={cardData.title}
                text={cardData.text}
                url={cardData.url}
              />
            )
          })
        } */}

        {/* ORIGINAL */}
        {/* <Card1 />
        <Card2 /> */}
      </section>
      <section className="counter">
        <Counter />
      </section>
    </div>
  );
}
