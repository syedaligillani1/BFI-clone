import { View, Text, ScrollView, Image } from "react-native";

export default function Instructors() {
  const instructors = [
    {
      id: 1,
      name: "ABDULRAHIM HAMOUDA",
      subject: "Electrical",
      image: require("../assets/instructor1.png")
    },
    {
      id: 2,
      name: "HASSAN ALI",
      subject: "Chemistry",
      image: require("../assets/instructor1.png")
    },
    {
      id: 3,
      name: "MARIA AHMED",
      subject: "Physics",
      image: require("../assets/instructor1.png")
    },
    {
      id: 4,
      name: "DR. KHALID",
      subject: "Math",
      image: require("../assets/instructor1.png")
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
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Our Instructors</Text>
        <Text style={{ fontSize: 14, fontWeight: "600", color: "#094e85" }}>
          See All
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 18, paddingRight: 10 }}
      >
        {instructors.map(inst => (
          <View
            key={inst.id}
            style={{
              width: 250,
              height: 78,               
              backgroundColor: '#F5F6F7',
              borderRadius: 15,
              marginRight: 15,
              flexDirection: "row",
              alignItems: "center",
              padding: 10,

              shadowColor: "#000",
              shadowOpacity: 0.06,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 2 },
              elevation: 2
            }}
          >

            <Image
              source={inst.image}
              style={{
                width: 55,
                height: 55,
                borderRadius: 30,
                marginRight: 12
              }}
              resizeMode="cover"
            />

            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 13 , fontWeight: "600" }}>
                {inst.name}
              </Text>
              <Text style={{ fontSize: 14, color: "#444", marginTop: 3 }}>
                {inst.subject}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
