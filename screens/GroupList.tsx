import React from "react";
import { SafeAreaView } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import RecipeList from "../components/RecipeList";

const GroupList = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 40 }}>
      <Header title="Hi Peter" icon="bell-o" />
      <Search placeholder="Enter receip" icon="search" />
      <Categories />
      <RecipeList />
    </SafeAreaView>
  );
};

export default GroupList;
