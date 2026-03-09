import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { useAuth } from "@/contexts/AuthContext";
import { RootStackParamList } from "@/navigation";

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { userName } = useAuth();

  return (
    <View style={styles.container}>
      <ThemedText style={styles.welcome}>Welcome {userName}</ThemedText>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Modal")}
      >
        <ThemedText style={styles.buttonText}>Abrir Modal</ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#48494B",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
