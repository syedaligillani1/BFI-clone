import { View } from "react-native";
import { ScrollView } from "react-native";
import Header from "../components/Header";
import StoriesRow from "../components/StoriesRow";
import BannerSlider from "../components/BannerSlider";
import Categories from "../components/Categories";
import Courses from "../components/Courses";
import Instructors from "../components/Instructors";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: 30
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <StoriesRow />
        <BannerSlider />
        <Categories />
        <Courses />
        <Instructors />
      </ScrollView>
    </View>
  );
}
