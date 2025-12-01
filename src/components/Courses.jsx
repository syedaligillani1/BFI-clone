import { View, Text, ScrollView, Image } from "react-native";

export default function Courses() {
  const courses = [
    {
      id: 1,
      code: "CHM 115",
      title: "Chemistry I",
      teacher: "Aiat ElSayed",
      oldPrice: "50KD",
      newPrice: "39KD",
      image: require("../assets/course1.png")
    },
    {
      id: 2,
      code: "CHM 112",
      title: "Chemistry II",
      teacher: "Aiat ElSayed",
      oldPrice: "50KD",
      newPrice: "39KD",
      image: require("../assets/course1.png")
    },
    {
      id: 3,
      code: "BIO 101",
      title: "Biology Intro",
      teacher: "Dr. Ali",
      oldPrice: "45KD",
      newPrice: "32KD",
      image: require("../assets/course1.png")
    },
    {
      id: 4,
      code: "PHY 120",
      title: "Physics I",
      teacher: "Mr. Hamoud",
      oldPrice: "55KD",
      newPrice: "40KD",
      image: require("../assets/course1.png")
    }
  ];

  return (
    <View style={{ marginTop: 25 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 18,
          marginBottom: 10
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>All Courses</Text>
        <Text style={{ fontSize: 14, fontWeight: "600", color: "#094e85" }}>See All</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 18, paddingRight: 10 }}
      >
        {courses.map(course => (
          <View
            key={course.id}
            style={{
              width: 220,
              backgroundColor: "#F5F6F7",   
              borderRadius: 15,
              marginRight: 15,
              paddingBottom: 12,
              shadowColor: "#000",
              shadowOpacity: 0.06,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 2 },
              elevation: 2
            }}
          >
            <Image
              source={course.image}
              style={{
                width: "100%",
                height: 130,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
              }}
              resizeMode="cover"
            />

            {/* <View
              style={{
                backgroundColor: "#ffc400",
                position: "absolute",
                top: 10,
                left: 10,
                paddingHorizontal: 8,
                paddingVertical: 3,
                borderRadius: 7
              }}
            >
              <Text style={{ color: "#094e85", fontWeight: "bold", fontSize: 12 }}>
                {course.code}
              </Text>
            </View> */}

            <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>{course.title}</Text>
              <Text style={{ fontSize: 13, color: "#444", marginTop: 3 }}>
                {course.teacher}
              </Text>

              <View style={{ flexDirection: "row", marginTop: 8 }}>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: "#8a8a8a",
                    marginRight: 8
                  }}
                >
                  {course.oldPrice}
                </Text>

                <Text
                  style={{
                    color: "#094e85",
                    fontWeight: "700"
                  }}
                >
                  {course.newPrice}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
