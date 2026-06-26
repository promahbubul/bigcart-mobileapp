import Fontisto from "@expo/vector-icons/Fontisto";
import { StyleSheet, TextInput, View } from "react-native";
type FontistoIconName = React.ComponentProps<typeof Fontisto>["name"];
type TInputBox = {
  icon: FontistoIconName;
  placeholder?: string;
  onChangeText?: () => void;
  iconColor: string;
  secureTextEntry?: boolean;
};
const InputBox = ({
  icon,
  placeholder,
  onChangeText,
  iconColor,
  secureTextEntry,
  keyboardType
}: TInputBox) => {
  return (
    <View style={styles.inputContainer}>
      <Fontisto name={icon} size={24} color={iconColor} />
      <TextInput
      keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
};
export default InputBox;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  input: {
    color: "#868889",
    fontSize: 15,
    fontWeight: "medium",
    fontFamily: "Poppins_500Medium",
    flex: 1,
  },
});
