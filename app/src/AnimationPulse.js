/**
 * Render intro's animation
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class AnimationPulse extends Component {
  constructor(props) {
    super(props);
    this.animated = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 3000,
      useHardwareTimer: true,
    }).start(this.props.isDone);
  }

  render() {
    const op1 = this.animated.interpolate({
      inputRange: [0, 0.49, 0.51, 1],
      outputRange: [1, 0.1, 1, 0.1],
    });

    const op2 = this.animated.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, 1, 0.1, 1, 0.1],
    });

    const sca1 = this.animated.interpolate({
      inputRange: [0, 0.49, 0.51, 1],
      outputRange: [1, 1.5, 1, 1.5],
    });

    const sca2 = this.animated.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [1, 1, 1.5, 1, 1.5],
    });

    return (
      <View style={styles.loadWrapper}>
        <Animated.View
          style={[styles.middleCircle, { transform: [{ scale: sca1 }], opacity: op1 }]}
        />
        <Animated.View
          style={[styles.middleCircle, { transform: [{ scale: sca2 }], opacity: op2 }]}
        />
      </View>
    );
  }
}

AnimationPulse.propTypes = {
  isDone: PropTypes.func.isRequired,
};
