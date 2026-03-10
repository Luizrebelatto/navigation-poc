import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { useAuth } from "@/contexts/AuthContext";

export default function HomeScreen() {
  const { userName } = useAuth();

  return (
    <View style={styles.container}>
      <ThemedText style={styles.welcome}>Welcome {userName}</ThemedText>
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
    color: "#000",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
  },
});
