import { PokeStoreProvider } from "@/context";
import { Home } from "@/screens/Home";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <PokeStoreProvider>
      <View style={styles.container}>
        <Home />
      </View>
    </PokeStoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
