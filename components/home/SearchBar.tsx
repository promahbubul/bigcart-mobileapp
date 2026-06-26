import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput placeholder="Search keywords.." />
      </View>
      <TouchableOpacity>
        <Feather name="sliders" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};
export default SearchBar;
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F5F9",
    marginHorizontal: 17,
    paddingHorizontal: 21,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "space-between",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    width: "90%",
    // flex: 1,
  },
});
