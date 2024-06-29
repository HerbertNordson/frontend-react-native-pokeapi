import { usePokeStoreContext } from "@/context";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export const Search = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const { handlePokemon } = usePokeStoreContext();

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to the pokemon world.</Text>
      </View>
      <View style={styles.submit}>
        <Text style={{ marginHorizontal: "auto" }}>Enter Pokemon name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Pickachu"
          value={pokemonName}
          onChangeText={setPokemonName}
        />
        <TouchableOpacity
          style={styles.bt}
          onPress={() => handlePokemon(pokemonName.toLowerCase())}
        >
          <Text style={styles.txtbt}>Cach!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingBottom: 40,
    paddingTop: 20,
  },
  title: {
    fontSize: 48,
    color: "#DDD",
    fontWeight: 600,
    textAlign: "center",
  },
  submit: {
    justifyContent: "space-evenly",
    gap: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 4,
    borderStyle: "solid",
    paddingHorizontal: 8,
    paddingVertical: 4,
    textAlign: "center",
    fontSize: 16,
    width: 300,
    marginHorizontal: "auto",
  },
  bt: {
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "",
    borderRadius: 8,
    borderStyle: "solid",
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: 300,
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  txtbt: {
    marginHorizontal: "auto",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    color: "#DDD",
  },
});
