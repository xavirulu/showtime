import React, { Component } from 'react';
import './CardTags.css';

class CardTags extends Component {
    constructor(props) {
        super(props);
     }
 
     render() {
        return (
            <div className="card-tags">
               {this.props.tags.map((tag) => {
                   return(<CardTag size={this.props.size} key="id" tag={tag}/>)
               })}
            </div>
          );
     }
  }

  class CardTag extends Component {
    constructor(props) {
        super(props);
     }
 
     render() {
        let i;
        switch(this.props.size) {
            case 'LITTLE':
                i = 1;
            case 'BIG':
                i = 3;
            default:
                i = 1;
        }
         const size = {
            'padding': 6*i + 'px',
            'fontSize': 20*i + 'px',
            'marginTop': 10*i + 'px',
            'marginLeft': 10*i + 'px',
            'borderRadius': 3*i + 'px'
         };
        return(
            <div className="tag" style={size}>
                <h6>{this.props.tag.genre}</h6>
            </div>
        );
     }
  }

  export default CardTags;