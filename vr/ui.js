import React from "react";
import { asset, Pano, Text, Image, View } from "react-vr";

export default class UiBackground extends React.Component {
  render() {
    return <Pano source={asset(this.props.img)} />;
  }
}
