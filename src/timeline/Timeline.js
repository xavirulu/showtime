import Card from '../card/Card.js';
import React, { Component } from 'react';
import './Timeline.css';
import data from '../data/showsData.json';

class Timeline extends Component {
    render() {
      return (
        <div className="timeline">
            {data.shows.map((showInfo) => {
                return(<Card key={showInfo.name} showInfo={showInfo} />)
            })}
        </div>
      );
    }
  }
  
  export default Timeline;