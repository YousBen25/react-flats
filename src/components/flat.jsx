import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Flat extends Component {
  // handleClick = () => {                        WITHOUT DESTRUCTURING RECEIVE ESLINGT ERROR
  //   if (this.props.selectGif) {
  //     this.props.selectGif(this.props.id);
  //   }
  // }

  // handleClick = () => {
  //   const { selectGif, id } = this.props; // this is destructuring
  //   if (selectGif) {
  //     selectGif(id);
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.id !== this.props.id; // should return boolean
  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  // }

  render () {
    // if (!this.props.id) {        WITHOUT DESTRUCTURING RECEIVE ESLINGT ERROR
    //   return null;
    // }
    // const { id } = this.props; // this is destructuring
    // if (!id) {
    //   return null;
    // }
    // eslint-disable-next-line react/destructuring-assignment
    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <div className={`card${this.props.selected ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          {this.props.flat.name}
        </div>
        <a
          className="card-link"
          href="#"
          onClick={this.handleClick}
        >
        </a>
      </div>
    );
  }
}

export default Flat;
