import React from "react";
import { Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface Prop {
  title: string;
  icon: any;
}

const Header = ({ title, icon }: Prop) => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
        <FontAwesome name={"arrow-circle-left"} size={28} color="#f96163" />
      </Pressable>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", marginRight: 4 }}>{title}</Text>
        <FontAwesome name={icon} size={24} color="#f96163" />
      </View>
    </View>
  );
};

export default Header;
