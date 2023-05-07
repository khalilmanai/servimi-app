import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getCategorie } from "../api/axios";
import ItemCard from "../Components/ItemCard";
import UserPanel from "../Components/UserPanel";

const ListTest = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategorie(3);
        setCategories(data);
        setSelectedCategory(data[0]?.categId);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItemContainer,
        selectedCategory === item.categId && styles.selectedCategoryItemContainer,
      ]}
      onPress={() => setSelectedCategory(item.categId)}
    >
      <Text
        style={[
          styles.categoryItemText,
          selectedCategory === item.categId && styles.selectedCategoryItemText,
        ]}
      >
        {item.nom}
      </Text>
    </TouchableOpacity>
  );

  const getSelectedCategoryItems = () => {
    const selectedCategoryObj = categories.find(
      (category) => category.categId === selectedCategory
    );

    if (selectedCategoryObj) {
      return selectedCategoryObj.menuItems;
    } else {
      return [];
    }
  };

  return (
    <View style={styles.container}>
      <UserPanel headerText="Votre liste des" secondText="Aliments" />
      <FlatList
        data={categories}
        keyExtractor={(item) => item.categId.toString()}
        renderItem={renderCategoryItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {selectedCategory && (
        <FlatList
          data={getSelectedCategoryItems()}
          keyExtractor={(item) => item.itemId.toString()}
          renderItem={({ item }) => <ItemCard item={item} />}
        />
      )}
    </View>
  );
};

export default ListTest;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  categoryItemContainer: {
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'20%',
   
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedCategoryItemContainer: {
    backgroundColor: "#F5A623",
  },
  categoryItemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
  selectedCategoryItemText: {
    color: "#fff",
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
