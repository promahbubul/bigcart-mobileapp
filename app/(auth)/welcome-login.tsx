import GoogleIcon from "@/assets/icons/GoogleIcon";
import { authWelcome } from "@/assets/images";
import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    useFonts,
} from "@expo-google-fonts/poppins";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const WelcomeLogin = () => {
  const { navigate } = useRouter();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) return null;
  return (
    <ImageBackground
      source={authWelcome}
      resizeMode="cover"
      style={styles.background}
    >
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
        <TouchableOpacity style={styles.googleBtn}>
          <GoogleIcon />
          <View style={{ flex: 1 }}>
            <Text style={styles.googleBtnText}>Continue with google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("/(auth)/sign-up")}>
          <LinearGradient
            colors={["#AEDC81", "#6CC51D"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.btn}
          >
            <FontAwesome5 name="user-circle" size={24} color="#fff" />
            <View style={{ flex: 1 }}>
              <Text style={styles.btnText}>Create an account</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account ? </Text>
          <TouchableOpacity
            onPress={() => navigate("/(auth)/login")}
            style={styles.loginBtn}
          >
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default WelcomeLogin;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#F4F5F9",
    paddingTop: 31,
    paddingHorizontal: 16,
    paddingBottom: 45,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontSize: 25,
    fontFamily: "Poppins_700Bold",
  },
  description: {
    fontSize: 15,
    color: "#868889",
    fontFamily: "Poppins_400Regular",
  },
  googleBtn: {
    backgroundColor: "#fff",
    paddingHorizontal: 33,
    paddingVertical: 20,
    flexDirection: "row",
    borderRadius: 5,
    // gap: 20,
    alignItems: "center",
    marginTop: 27,
  },
  googleBtnText: {
    fontFamily: "Poppins_500Medium",
    fontWeight: "medium",
    fontSize: 15,
    textAlign: "center",
  },
  btn: {
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 12,
    paddingHorizontal: 33,
  },
  btnText: {
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontWeight: "medium",
    fontSize: 15,
    textAlign: "center",
  },

  loginBtn: {},
  loginBtnText: {
    color: "#000",
    fontWeight: "medium",
    fontFamily: "Poppins_500Medium",
  },
  loginText: {
    fontFamily: "Poppins_400Regular",
    fontWeight: "light",
    color: "#868889",
  },
  loginContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 16,
  },
});
