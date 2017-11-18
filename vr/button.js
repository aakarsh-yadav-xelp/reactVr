import React from "react";
import { VrButton, asset, Pano, Text, Image, View, Animated } from "react-vr";
const Easing = require("Easing");
export default class ButtonForChange extends React.Component {
  constructor(props) {
    super();

    this.state = {
      animatedTranslation: new Animated.Value(0)
    };
  }
  animateIn = () => {
    Animated.timing(this.state.animatedTranslation, {
      toValue: 0.325,
      duration: 100,
      easing: Easing.in
    }).start();
  };

  animateOut = () => {
    Animated.timing(this.state.animatedTranslation, {
      toValue: 0,
      duration: 100,
      easing: Easing.in
    }).start();
  };
  render() {
    return (
      <Animated.View
        style={{
          flexDirection: "column",
          layoutOrigin: [1, 0],
          transform: [
            { translateZ: this.state.animatedTranslation },
            { translate: [-1.5, 0, -13] }
          ]
        }}
      >
        <VrButton
          onClick={() => this.props.changeIt(this.props.img)}
          onEnter={this.animateIn}
          onExit={this.animateOut}
          style={{
            alignItems: "center",
            flexDirection: "column",
            shadowOpacity: 0.1,
            marginLeft: 0.3
          }}
        >
          <Image
            source={asset(this.props.img)}
            style={{ width: 2.5, height: 2.5 }}
          />
        </VrButton>
        <View
          style={{
            marginLeft: 0.3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 1
          }}
        >
          <Text
            style={{
              fontSize: 0.5,
              color: "black"
            }}
          >
            {this.props.title}
          </Text>
        </View>
      </Animated.View>
    );
  }
}
