import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  add() {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  }

  less() {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  }

  zero() {
    this.setState({ value: 0 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.value}</Text>

        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.button} onPress={() => this.less()}>
            <Text style={styles.textButton}>Sub</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.zero()}>
            <Text style={styles.textButton}>Zero</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.add()}>
            <Text style={styles.textButton}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#72B1F7',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  button: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C4CCF7',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 10,
  },
  viewButton: {
    flexDirection: 'row',
    padding: 5,
    margin: 10,
  },
  textButton: {
    color: '#F78572',
  },
});
