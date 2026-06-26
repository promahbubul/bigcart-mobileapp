import { signUpBg } from "@/assets/images";
import InputBox from "@/components/auth/InputBox";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SignUp = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) return null;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <StatusBar barStyle="light-content" backgroundColor="transparent" />
        <ImageBackground
          source={signUpBg}
          resizeMode="cover"
          style={styles.background}
        >
          <StatusBar />
          <KeyboardAvoidingView>
            <View style={styles.container}>
              <Text style={styles.title}>Create account</Text>
              <Text style={styles.description}>Quickly create account</Text>
              <InputBox
                iconColor="#000"
                icon="email"
                placeholder="Email address"
              />
              <View style={{ marginTop: 5 }}>
                <InputBox
                  iconColor="#000"
                  icon="locked"
                  secureTextEntry={true}
                  placeholder="Enter password"
                />
              </View>
              <View style={{ marginTop: 5 }}>
                <InputBox
                  iconColor="#000"
                  icon="locked"
                  secureTextEntry={true}
                  placeholder="Enter password"
                />
              </View>
              <TouchableOpacity>
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
                <TouchableOpacity>
                  <Text>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },

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
    marginBottom: 20,
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

  loginBtn: {
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
