import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 5 },
      { id: 3, value: 3 }
    ]
  };
  render() {

    return (
      <div className="container">
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}  >
            <h4 className="display-4">Product {counter.id}</h4>
          </Counter>

        ))}
      </div>
    );
  }
}

export default Counters;
