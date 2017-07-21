import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  PanResponder,
  Animated
} from "react-native";
import { Constants } from "expo";

import SwipeCards from "react-native-swipe-cards";

let Card = React.createClass({
  render() {
    return (
      <View
        style={[styles.card, { backgroundColor: this.props.backgroundColor }]}
      >
        <Text>{this.props.text}</Text>
      </View>
    );
  }
});

const Cards = [
  { text: "hunter2", backgroundColor: "red" },
  { text: "!!!11!!!!!1!", backgroundColor: "purple" },
  { text: "Courgette", backgroundColor: "green" },
  { text: "Blueberry", backgroundColor: "blue" },
  { text: "Umm...", backgroundColor: "cyan" },
  { text: "orange", backgroundColor: "orange" }
];

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards
    };
  },
  handleYup(card) {
    console.log(`Yup for ${card.text}`);
  },
  handleNope(card) {
    console.log(`Nope for ${card.text}`);
  },
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={cardData => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    );
  }
});

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300
  }
});

