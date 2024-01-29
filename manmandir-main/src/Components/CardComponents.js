import React from "react";
import ButtonComponents from "./Buttoncomponents";
import CardImageMap from "./CardImageMap";
import Logo from "./../assets/Images/mandir.jpg";
import mandir from "./../assets/Images/shame.webp";
import Carousel from 'react-elastic-carousel';
const  breakPoints =[
  {width:1,itemsToShow:1},
  {width:550,itemsToShow:2},
  {width:550,itemsToShow:3},
 
 
  ];
class CardComponents extends React.Component {
  constructor() {
    super();
    this.state = {
      Card: [
        {
          title: "Temple",
          description: " Carving Temple",
          price: 100,
        },

        {
          title: "Temple",
          description: "Carving Temple",
          price: 100,
        },
        {
          title: "Temple",
          description: "Carving Temple",
          price: 100,
        },
      ],
    };
  }
 

  render() {
    console.log(this.state);
    return (
      <div className="carddiv">
        <section className="sectioncard">
        <Carousel breakPoints={breakPoints}>
          {this.state.Card.map((item) => {
            return (
              <div>
              <div>
                <div className="sectionimgdiv">
                  <img src={Logo} />
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <ButtonComponents />
                </div>
                </div>
                
                
                
               
                </div>
              
            );
          })}
           </Carousel>
        </section>
      </div>
    );
  }
}

export default CardComponents;
