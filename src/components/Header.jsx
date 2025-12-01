import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Header() {
    return (
        <View style={{ backgroundColor: "#094e85" }}>

            <View
                style={{
                    paddingTop: 55,
                    paddingHorizontal: 18,
                    paddingBottom: 5,
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    backgroundColor: "#094e85"
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Image
                        source={require("../assets/logo.png")}
                        style={{
                            width: 240,
                            height: 90,
                            resizeMode: "contain"
                        }}
                    />

                    <View
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: 21,
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Feather name="shopping-bag" size={14} color="#094e85" />
                    </View>
                </View>

                {/* Main Text
        <Text
          style={{
            marginTop: 10,
            color: "white",
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          BRIGHT FUTURE INSTITUTE
        </Text>

        <Text
          style={{
            color: "#f1c40f",
            fontSize: 14,
            fontWeight: "600",
            marginTop: 2,
            letterSpacing: 3
          }}
        >
          FOR PRIVATE TRAINING
        </Text> */}
            </View>

            {/* Yellow Separator Line */}
            <View
                style={{
                    height: 5,
                    backgroundColor: "#ffc400ff",
                    width: "100%",


                }}
            />
        </View>
    );
}
