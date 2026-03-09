import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';
import { Text, type TextProps, Pressable } from 'react-native';

type Props = TextProps & { href: string };

export function ExternalLink({ href, children, ...rest }: Props) {
  return (
    <Pressable
      onPress={async () => {
        if (process.env.EXPO_OS !== 'web') {
          await openBrowserAsync(href, {
            presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
          });
        }
      }}>
      <Text {...rest}>{children}</Text>
    </Pressable>
  );
}
