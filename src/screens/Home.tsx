import { Figure } from "@/components/figure";
import { Search } from "@/components/search";
import { usePokeStoreContext } from "@/context";
import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

export const Home = () => {
  const { loading, error } = usePokeStoreContext();
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      {loading && <Text style={styles.txt}>Loading</Text>}
      <Figure />
      {error && <Text style={styles.txt}>{error}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    gap: 16,
    padding: 4,
  },
  txt: {
    marginHorizontal: "auto",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    color: "#000",
  },
});
