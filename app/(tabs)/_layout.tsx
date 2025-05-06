import { Home, Search, User } from 'lucide-react-native';
import { Tabs } from 'expo-router';
import React from 'react';

import { useTheme, useClientOnlyValue } from '@/hooks';

function TabBarIcon(props: { icon: React.ElementType; color: string }) {
  const Icon = props.icon;
  return <Icon size={20} color={props.color} />;
}

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue.useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <TabBarIcon icon={Home} color={color} />,
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color }) => <TabBarIcon icon={Search} color={color} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <TabBarIcon icon={User} color={color} />,
        }}
      />
    </Tabs>
  );
}
