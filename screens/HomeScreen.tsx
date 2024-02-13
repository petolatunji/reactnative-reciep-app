import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { colors } from "./data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  RecipeList: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../assets/first.jpg")}
        style={{ marginTop: 40, resizeMode: "contain" }}
      />
      <Text
        style={{
          marginVertical: 30,
          fontSize: 18,
          fontWeight: "bold",
          color: colors.COLOR_PRIMARY,
        }}
      >
        20K + Premium Recipes
      </Text>
      <Text style={{ fontSize: 36, fontWeight: "bold" }}>Cook Like a Chef</Text>
      <TouchableOpacity
        style={{
          marginTop: 30,
          width: "80%",
          alignItems: "center",
          backgroundColor: colors.COLOR_PRIMARY,
          borderRadius: 12,
        }}
        onPress={() => navigation.navigate("RecipeList")}
      >
        <Text
          style={{
            color: "white",
            padding: 10,
          }}
        >
          Let Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
