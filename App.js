import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';




export default class App extends Component {
  state = {
    palceName: ""
  }

  placeNameChangedHandler = val => {
    this.setState({ placeName: val.value })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.placeInput}
            placeholder={"An awesome place"}
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button
          title="Add"
          style={styles.placeButton}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
