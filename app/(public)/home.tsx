import { homeBanner } from "@/assets/images";
import Categories from "@/components/home/Categories";
import SearchBar from "@/components/home/SearchBar";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <SearchBar />
      <View style={styles.bannerContainer}>
        <Image source={homeBanner} style={styles.bannerImage} />
      </View>
      <Categories />
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  bannerContainer: {
    marginHorizontal: 17,
    marginTop: 10,
  },
  bannerImage: {
    height: 160,
    width: "100%",
  },
});
