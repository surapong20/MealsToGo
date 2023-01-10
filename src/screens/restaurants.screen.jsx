import { StatusBar, StyleSheet, View } from "react-native";
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
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 20,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "lightblue",
  },
});
