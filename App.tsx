import { StatusBar } from "expo-status-bar";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./src/store";
import Map from "./src/screens/Map";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Map />
      </GestureHandlerRootView>
    </ReduxProvider>
  );
}
