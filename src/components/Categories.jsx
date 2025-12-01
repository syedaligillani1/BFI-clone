import { View, Text, TouchableOpacity } from "react-native";

export default function Categories() {
  const items = [
    { id: 1, label: "Physics", icon: "🔬" },
    { id: 2, label: "Chemistry", icon: "⚗️" },
    { id: 3, label: "Math", icon: "🧮" },
    { id: 4, label: "Chemical", icon: "🧪" }
  ];

  return (
    <View style={{ marginTop: 25, paddingHorizontal: 18 }}>
      
      {/* Section Title */}
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 15 }}>
        Categories
      </Text>

      {/* Row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        {items.map(item => (
          <View
            key={item.id}
            style={{ alignItems: "center", width: 70 }}
          >
            {/* Grey icon card */}
<TouchableOpacity
  style={{
    width: 65,
    height: 65,
    borderRadius: 15,
    backgroundColor: "#ededed",   // 👈 lighter grey
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  }}
>
  <Text style={{ fontSize: 30 }}>{item.icon}</Text>
</TouchableOpacity>


            {/* Label under card */}
            <Text
              style={{
                fontSize: 14,
                marginTop: 6,
                color: "black",
                textAlign: "center"
              }}
            >
              {item.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
