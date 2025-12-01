import { View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

export default function BannerSlider() {
  return (
    <View style={{ height: 180, marginTop: 20 }}>
      <Swiper
        autoplay={true}
        autoplayTimeout={3}
        showsPagination={true}
        dotColor="#ccc"
        activeDotColor="#094e85"
      >
        <Image
          source={require("../assets/banners/banner1.png")}
          style={{
            width: width,       // full screen width
            height: 180,
            borderRadius: 15,    
          }}
          resizeMode="cover"
        />

        <Image
          source={require("../assets/banners/banner2.png")}
          style={{
            width: width,
            height: 180,
            borderRadius: 15,
          }}
          resizeMode="cover"
        />

        <Image
          source={require("../assets/banners/banner3.png")}
          style={{
            width: width,
            height: 180,
            borderRadius: 15,
          }}
          resizeMode="cover"
        />
      </Swiper>
    </View>
  );
}
