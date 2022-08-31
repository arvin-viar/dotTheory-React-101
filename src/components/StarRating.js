import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  };

  // Write a function that returns 5 Star components
  renderDefaultStars = () => {
    let i = 0;
    let stars = [];

    do {
      i++;
      const rating = i;
      stars.push(
        <Star
          key={i}
          isSelected={this.state.rating >= rating}
          updateStarRating={ () => this.updateStarRating(rating) }
        />
      );
    } while (i < 5);

    return stars;
  }

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props
  updateStarRating = (rating) => {
    if (this.state.rating === rating) {
      this.setState({ rating: 0 });
    } else {
      this.setState({ rating });
    }
  }

  render() {
    return (
      <ul className="course--stars">
        { this.renderDefaultStars() }
      </ul>
    );
  }
}

export default StarRating;
