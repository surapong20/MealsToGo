import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import React, { useState } from "react";
import { RestaurantInfoCard } from "../features/restaurants/components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <RestaurantInfoCard/>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 20,
    backgroundColor: "lightgreen",
  },
});
