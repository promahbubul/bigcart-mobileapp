import { homeBanner } from "@/assets/images";
import Categories from "@/components/home/Categories";
import FeatrueProducts from "@/components/home/FeatrueProducts";
import Navbar from "@/components/home/Navbar";
import SearchBar from "@/components/home/SearchBar";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, View } from "react-native";
const Home = () => {
  return (
    <LinearGradient
      colors={["#fff", "#fafafa", "#f5f5f5"]}
      start={{ x: 0, y: 0 }}
      locations={[0, 0.54, 1]}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        paddingTop: 30,
        paddingBottom: 100,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <SearchBar />
          <View style={styles.bannerContainer}>
            <Image source={homeBanner} style={styles.bannerImage} />
          </View>
          <Categories />
          <FeatrueProducts />
        </View>
      </ScrollView>
      <Navbar />
    </LinearGradient>
  );
};
export default Home;

const styles = StyleSheet.create({
  bannerContainer: {
    marginHorizontal: 17,
    marginTop: 10,
  },
  bannerImage: {
    height: 120,
    width: "100%",
  },
});
