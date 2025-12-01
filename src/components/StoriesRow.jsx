import { View, Text, TouchableOpacity } from "react-native";

export default function StoriesRow() {
  const items = [
    { id: 1, label: "الأصدقاء 👥" },
    { id: 2, label: "الأقساط 📅" },
    { id: 3, label: "المسابقة 😅" },
    { id: 4, label: "العروض 🆕"}
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        marginTop: 15
      }}
    >
      {items.map(item => (
        <TouchableOpacity
          key={item.id}
          style={{ alignItems: "center", width: 75 }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 70,
              borderWidth: 4,
              borderColor: "#f1c40f",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          </View>

          <Text
            style={{
              marginTop: 6,
              fontSize: 11,
              textAlign: "center"
            }}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
