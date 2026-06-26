import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Navbar = () => {
  const { navigate } = useRouter();
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.navbarContainers}>
        <TouchableOpacity onPress={() => navigate("/(public)/home")}>
          <Feather name="home" size={22} color="#040404" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("/(public)/account")}>
          <FontAwesome5 name="user-circle" size={22} color="#868889" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("/(public)/favorite")}>
          <SimpleLineIcons name="heart" size={22} color="#868889" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigate("/(public)/cart")}
          style={styles.activeBtn}
        >
          <MaterialCommunityIcons
            name="shopping-outline"
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
export default Navbar;
const styles = StyleSheet.create({
  container: {
    // height: 66,
    paddingHorizontal: 37,
    paddingVertical: 22,
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    paddingBottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  navbarContainers: {
    flexDirection: "row",
    width: "65%",
    borderColor: "red",
    justifyContent: "space-between",
  },
  activeBtn: {
    backgroundColor: "#6CC51D",
    padding: 14,
    position: "absolute",
    top: -40,
    right: -10,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: "#fff",
  },
});
