import {
  featureImage1,
  featureImage10,
  featureImage2,
  featureImage3,
  featureImage4,
  featureImage5,
  featureImage6,
  featureImage7,
  featureImage8,
  featureImage9,
} from "@/assets/images";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProductCard from "./ProductCard";


export const productsData = [
  {
    id: 1,
    name: "Fresh Peach",
    image: featureImage1,
    price: 8.0,
    unit: "dozen",
    isFavorite: false,
    badge: null,
    quantity: 0,
  },
  {
    id: 2,
    name: "Avocado",
    image: featureImage2,
    price: 7.0,
    unit: "2.0 lbs",
    isFavorite: false,
    badge: "NEW",
    quantity: 1,
  },
  {
    id: 3,
    name: "Pineapple",
    image: featureImage3,
    price: 9.9,
    unit: "1.50 lbs",
    isFavorite: true,
    badge: null,
    quantity: 0,
  },
  {
    id: 4,
    name: "Black Grapes",
    image: featureImage4,
    price: 7.05,
    unit: "5.0 lbs",
    isFavorite: false,
    badge: "-16%",
    quantity: 0,
  },
  {
    id: 5,
    name: "Pomegranate",
    image: featureImage5,
    price: 12.5,
    unit: "1 kg",
    isFavorite: false,
    badge: null,
    quantity: 0,
  },
  {
    id: 6,
    name: "Strawberry",
    image: featureImage6,
    price: 10.99,
    unit: "500 g",
    isFavorite: true,
    badge: "NEW",
    quantity: 0,
  },
  {
    id: 7,
    name: "Orange",
    image: featureImage7,
    price: 5.75,
    unit: "1 kg",
    isFavorite: false,
    badge: null,
    quantity: 0,
  },
  {
    id: 8,
    name: "Apple",
    image: featureImage8,
    price: 6.99,
    unit: "1 kg",
    isFavorite: false,
    badge: null,
    quantity: 0,
  },
  {
    id: 9,
    name: "Banana",
    image: featureImage9,
    price: 4.25,
    unit: "1 dozen",
    isFavorite: false,
    badge: "-10%",
    quantity: 2,
  },
  {
    id: 10,
    name: "Watermelon",
    image: featureImage10,
    price: 15.5,
    unit: "each",
    isFavorite: true,
    badge: null,
    quantity: 0,
  },
];
const FeatrueProducts = () => {
  return (
    <View style={styles.container}>
      {/* Section Heading */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Featured products</Text>
        <TouchableOpacity>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="#868889"
          />
        </TouchableOpacity>
      </View>
      {/* Products */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          rowGap: 10,
          columnGap: 5,
          justifyContent: "space-between",
        }}
      >
        {productsData?.map((product) => (
          <ProductCard {...product} key={product?.id} />
        ))}
      </View>
    </View>
  );
};
export default FeatrueProducts;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "semibold",
    fontFamily: "Poppins_600SemiBold",
  },
});
