import React, { Component } from 'react';
import './Card.css';
import CardTags from '../tags/CardTags.js';
import { Link } from 'react-router-dom';

class Card extends Component {
    constructor(props) {
       super(props);
    }

    render() {
        const to = `/details/${this.props.showInfo.id}`;
      return (
        
        <div className="card-box">
          <CardTags size="LITTLE" tags={this.props.showInfo.genres} />
            <Link to={to}>
                <CardImage info={this.props.showInfo}/>
                <CardInformation info={this.props.showInfo} />
            </Link>
        </div>
      );
    }
  };

  class CardImage extends Component {
    constructor(props) {
        super(props);
     }
     render() {
       return (
         <div className="clickable">
            <img  alt={this.props.info.name} className="card-image" src={this.props.info.image}/>
         </div>
       );
     }
}

  class CardInformation extends Component {
    constructor(props) {
        super(props);
     }
     render() {
       return (
         <div className="card-info">
             <h2 className="card-title">{this.props.info.name}</h2>
         </div>
       );
     }
  }

  export default Card;