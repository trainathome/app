import { useRouter } from 'expo-router';
import React from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  GestureStateChangeEvent,
  GestureUpdateEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { SwipeBackGestureProps } from '~/interfaces';

export function SwipeBackGesture({
  children,
  enabled = true,
  style,
}: SwipeBackGestureProps) {
  const router = useRouter();

  const swipeBackGesture = Gesture.Pan()
    .enabled(enabled)
    .onBegin(
      (event: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => {
        console.log(event);
        // Only start the gesture if it begins from the left edge
        if (event.x > 50) {
          return false;
        }
      }
    )
    .onUpdate((event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
      // Track the horizontal movement
      if (event.translationX > 100) {
        router.back();
      }
    });

  return (
    <GestureHandlerRootView style={style}>
      <GestureDetector gesture={swipeBackGesture}>{children}</GestureDetector>
    </GestureHandlerRootView>
  );
}
