import React from "react";
import { ScrollView, Text, View } from "react-native";
import { colors, categories } from "../screens/data";

const Categories = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontWeight: "bold" }}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((items, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor:
                  index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight: 36,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                marginVertical: 16,
              }}
            >
              <Text
                style={{
                  color:
                    index === 0 ? colors.COLOR_LIGHT : colors.COLOR_PRIMARY,
                }}
              >
                {items.category}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
