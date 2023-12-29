import { ViewProps } from 'react-native';
import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

export type Props = ViewProps;

const NativeView: React.ComponentType<Props> = requireNativeViewManager('ExpoWebView');

export default function ExpoWebView(props: Props) {
  const [isLoading, setIsLoading] = React.useState(false);
  return <NativeView {...props} />;
}
