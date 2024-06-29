import { usePokeStoreContext } from "@/context";
import { IAbility } from "@/utils/interfaces";
import { View, Image, Text, StyleSheet } from "react-native";

export const Figure = () => {
  const { pokemon } = usePokeStoreContext();
  return (
    <>
      {pokemon.name && (
        <View style={styles.card}>
          <Image
            style={styles.figure}
            source={{
              uri: pokemon.image,
            }}
          />
          <View>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Text style={{ fontWeight: 600, fontSize: 18 }}>Abilidades:</Text>
            <View style={styles.ability}>
              {pokemon.abilities.map((ab: IAbility) => (
                <View style={styles.mold}>
                  <Text style={{ fontSize: 16, color: "#DDD" }}>{ab.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
    width: "80%",
    padding: 20,
    gap: 10,
  },
  figure: {
    width: 200,
    height: 400,
  },
  name: {
    fontSize: 32,
    color: "#ff0000",
    fontWeight: 600,
  },
  ability: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  mold: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: "#000",
    marginHorizontal: 2,
    marginVertical: 6,
    borderRadius: 8,
  },
});
