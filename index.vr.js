import React from "react";
import { AppRegistry, Text, View, Animated } from "react-vr";
import UiBackground from "./vr/ui";
import ButtonForChange from "./vr/button";

export default class welcomeToVR extends React.Component {
  constructor() {
    super();
    this.state = {
      img: "5.png"
    };
  }
  change(item) {
    this.setState({ img: item });
  }
  render() {
    return (
      <View>
        <UiBackground img={this.state.img} />
        <View style={{ flexDirection: "row", layoutOrigin: [0.25, -1] }}>
          <ButtonForChange
            changeIt={item => this.change(item)}
            img={"1.jpg"}
            title={"Aisa"}
          />
          <ButtonForChange
            changeIt={item => this.change(item)}
            img={"2.jpg"}
            title={"Chess World"}
          />
          <ButtonForChange
            changeIt={item => this.change(item)}
            img={"4.jpg"}
            title={"My Office"}
          />
          <ButtonForChange
            changeIt={item => this.change(item)}
            img={"5.jpg"}
            title={"text"}
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("welcomeToVR", () => welcomeToVR);
