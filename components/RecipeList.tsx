import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { colors, recipeList } from "../screens/data";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export type RootStackParamList = {
  RecipeDetail: { item: {} } | undefined;
};

const RecipeList = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: "bold" }}>Categories</Text>

        <View style={{ flex: 1 }}>
          <FlatList
            key={1}
            data={recipeList}
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>
                  navigation.navigate("RecipeDetail", { item: item })
                }
                style={{
                  backgroundColor: colors.COLOR_LIGHT,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 7,
                  borderRadius: 16,
                  marginVertical: 16,
                  alignItems: "center",
                  paddingHorizontal: 8,
                  paddingVertical: 8,
                  width: "48%",
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 150, height: 150, resizeMode: "center" }}
                />
                <Text>{item.name}</Text>
                <View style={{ flexDirection: "row", marginTop: 6 }}>
                  <Text>{item.time}</Text>
                  <Text>|</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                    <FontAwesome
                      name="star"
                      size={16}
                      color={colors.COLOR_PRIMARY}
                    />
                  </View>
                </View>
              </Pressable>
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeList;
