import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { TabParamList } from "@/navigation";

type ExploreRouteProp = RouteProp<TabParamList, "Explore">;
type ExploreNavigationProp = BottomTabNavigationProp<TabParamList, "Explore">;

export default function ExploreScreen() {
  const route = useRoute<ExploreRouteProp>();
  const navigation = useNavigation<ExploreNavigationProp>();

  const message = route.params?.message ?? "Hello";

  return (
    <View style={styles.container}>
      <ThemedText style={styles.message}>{message}</ThemedText>

      <Pressable
        style={styles.button}
        onPress={() => navigation.setParams({ message: "Hello luiz" })}
      >
        <ThemedText style={styles.buttonText}>Atualizar Params</ThemedText>
      </Pressable>

      <Pressable
        style={[styles.button, styles.resetButton]}
        onPress={() => navigation.setParams({ message: "Hello" })}
      >
        <ThemedText style={styles.buttonText}>Resetar Params</ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  message: {
    color: "#000",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#48494B",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
  },
  resetButton: {
    backgroundColor: "#888",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
