import React, { Component } from 'react';
import data from '../data/showsData.json';
import './Details.css';
import CardTags from '../tags/CardTags.js';

class Details extends Component {
    render() {
      return (
        <div className="details-card">  
            <div className="header-details">
                <img className="detail-image" src={data.shows[this.props.match.params.id - 1].image}></img>
            </div>
            <div className="info">
                <h2 className="show-title">{data.shows[this.props.match.params.id - 1].name}</h2>
                <CardTags size="BIG" tags={data.shows[this.props.match.params.id - 1].genres} />
                <p className="description">
                {data.shows[this.props.match.params.id - 1].description}
                </p>
            </div>
        </div>
      );
    }
  }
  
  export default Details;
  