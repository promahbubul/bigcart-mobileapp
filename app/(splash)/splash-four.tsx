import { splashscreenOne } from "@/assets/images";
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashFour = () => {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  if (!fontsLoaded) return null;
  return (
    <ImageBackground
      source={splashscreenOne}
      resizeMode="cover"
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.pageHeading}>
            Get Discounts {"\n"}
            On All Products
          </Text>
          {/* <Image style={styles.logo} source={logo} /> */}
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.dotContainer}>
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
            <View style={styles.acitveDot}></View>
          </View>
          <TouchableOpacity>
            <LinearGradient
              colors={["#AEDC81", "#6CC51D"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Get started</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default SplashFour;
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  headerContainer: {
    paddingHorizontal: 40,
  },
  pageHeading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  logo: {
    height: 50,
    width: 127,
    marginHorizontal: "auto",
  },
  description: {
    fontSize: 15,
    marginTop: 10,
    color: "#868889",
    fontWeight: "medium",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  bottomContainer: {
    paddingHorizontal: 17,
  },
  dotContainer: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: "#dcdc",
    borderRadius: 100,
  },
  acitveDot: {
    height: 8,
    width: 8,
    backgroundColor: "#6CC51D",
    borderRadius: 100,
  },
  btn: {
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "semibold",
    fontSize: 15,
  },
});
