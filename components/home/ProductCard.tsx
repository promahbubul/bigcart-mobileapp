import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useFonts } from "expo-font";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type TProductCard = {
  id: number;
  name: string;
  image?: ImageSourcePropType;
  price: number;
  unit?: string;
  isFavorite: boolean;
  badge?: string | null;
  quantity: number;
};

const ProductCard = ({
  id,
  name,
  image,
  price,
  unit,
  isFavorite,
  badge,
  quantity,
}: TProductCard) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.heart}>
        <SimpleLineIcons name="heart" size={16} color="#868889s" />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image resizeMode="contain" source={image} style={styles.image} />
        </View>
        <Text style={styles.price}>$ {price}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.unit}>{unit}</Text>
      </View>
      <TouchableOpacity style={styles.cardBtn}>
        <Ionicons name="bag-handle-outline" size={18} color="#6CC51D" />
        <Text style={styles.cardBtnText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ProductCard;
const styles = StyleSheet.create({
  heart: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  container: {
    // borderWidth: 2,
    // color: "red",
    width: "48%",
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: 94,
    height: 94,
  },
  image: {
    width: "100%",
    flex: 1,
  },
  contentContainer: {
    padding: 10,
    paddingTop: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  price: {
    fontSize: 12,
    color: "#6CC51D",
    fontWeight: "medium",
    fontFamily: "Poppins_500Medium",
  },
  name: {
    fontSize: 15,
    fontWeight: "semibold",
    fontFamily: "Poppins_600SemiBold",
    color: "#000",
  },
  unit: {
    color: "#868889",
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
  },
  cardBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,

    gap: 9,
  },
  cardBtnText: {
    color: "#010101",
    fontFamily: "Poppins_500Medium",
    fontWeight: "medium",
    fontSize: 12,
  },
});
