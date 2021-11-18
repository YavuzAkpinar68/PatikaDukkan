import React from "react";
import AnimatedLottieView from "lottie-react-native";
import loadinganmtd from "../../assets/loadinganmtd.json"


const Loading = () => {
  return(
    <AnimatedLottieView  
    style={{
      width: 400,
      height: 400,
      }}
    source={require(`../../assets/loadinganmtd.json`)} autoPlay/>
  )
}
export default Loading