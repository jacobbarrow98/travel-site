import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import home1 from '../images/Home1.jpg';
import home6 from '../images/Home_6.jpg';
import home7 from '../images/Home7.jpg';
import sport from '../images/SportingActivities1.jpg';
import home8 from '../images/Home8.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Experience the Hill Country in Luxury</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={home1}
              text="Upland Resort occupies a uniquely diverse terrain including miles of the spring-fed, crystal-clear Upland Creek and the famous Guadalupe River"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={home6}
              text="You'll call it paradise when you experience the combination of the pristine hunt country with the outstanding cuisine, award-winning lodging accommodations and premier event facilities at Upland Resort."
              label="Luxury"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={home7}
              text="Upland Resort features quail & upland bird hunting, European-style driven pheasant shooting, decoyed mallard duck hunting and some of the finest seasonal dove hunting in south Texas"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={sport}
              text="Located in the picturesque Texas Hill Country, the setting for clay target shooting at Upland Resort is one of the most beautiful in the country according to well-traveled shooters"
              label="Adrenaline"
              path="/products"
            />
            <CardItem
              src={home8}
              text="Upland Resort lodging reflects the traditional rustic elegance of Texas ranches combined with the comforts and conveniences of home"
              label="Luxury"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
