import React, { Component } from "react";
import { List } from "./ListOfPlayers";
export default class Player extends Component {
  render() {
    List.map((player) => (
      <div className="container">
        <div className="column">
          <div className="card">
            <img src={player.img} />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>
      </div>
    ));
  }
}
