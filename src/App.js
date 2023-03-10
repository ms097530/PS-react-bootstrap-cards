import React from "react";
import "./styles.css";
//import card1
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";

import cardsArr from './data'

console.log('this is cardsArr: ', cardsArr)

export default function App()
{
  const cards = cardsArr.map((cardData, index) =>
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

        <Card1 />
        <Card2 />
      </section>
    </div>
  );
}
