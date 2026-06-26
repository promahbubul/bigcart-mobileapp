import {
  BabyCareIcon,
  BeverageIcon,
  EdibalOilIcon,
  FruitesIcon,
  GroceryIcon,
  HouseHoldIcon,
  VegetableIcon,
} from "@/assets/icons";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const categoriesData = [
  {
    id: 1,
    name: "Vegetables",
    icon: VegetableIcon,
    bgColor: "#E6F2EA",
  },
  {
    id: 2,
    name: "Fruits",
    icon: FruitesIcon,
    bgColor: "#FFE9E5",
  },
  {
    id: 3,
    name: "Beverages",
    icon: BeverageIcon,
    bgColor: "#FFF6E3",
  },
  {
    id: 4,
    name: "Grocery",
    icon: GroceryIcon,
    bgColor: "#F3EFFA",
  },
  {
    id: 5,
    name: "Edible Oil",
    icon: EdibalOilIcon,
    bgColor: "#DCF4F5",
  },
  {
    id: 6,
    name: "Household",
    icon: HouseHoldIcon,
    bgColor: "#FFE8F2",
  },
  {
    id: 7,
    name: "Baby Care",
    icon: BabyCareIcon,
    bgColor: "#D2EFFF",
  },
];

const Categories = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="#868889"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
        }}
        data={categoriesData}
        renderItem={({ item }) => {
          const Icon = item.icon;
          return (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: item.bgColor,
                  borderRadius: 50,
                  width: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 40,
                }}
              >
                <Icon width={20} height={20} />
              </TouchableOpacity>
              <Text style={styles.iconName}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Categories;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
    marginTop: 14,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "semibold",
    fontFamily: "Poppins_600SemiBold",
  },
  buttonContainer: {},
  icon: {
    height: 30,
    width: 30,
  },
  iconName: {
    fontSize: 10,
    color: "#868889",
    marginTop: 5,
    fontFamily: "Poppins_500Medium",
    fontWeight: "medium",
  },
});
