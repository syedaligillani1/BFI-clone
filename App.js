import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./src/navigation/BottomTabs";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </Provider>
  );
}
