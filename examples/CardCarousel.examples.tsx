import React from 'react';
import { ActivitySquareCard } from '~/components/ActivitySquareCard';
import { CardCarousel } from '~/components/CardCarousel';
import { Text, View } from '~/components/Themed';
import { Sport, type ActivityParticipant } from '~/interfaces';

// Updated Activity Item interface for the new ActivitySquareCard
interface ActivityItemExample {
  id: string;
  sport: Sport;
  date: string;
  time: string;
  duration: string;
  level: string;
  participants: ActivityParticipant[];
  creator: ActivityParticipant;
}

// Example 1: Using CardCarousel with Activity Cards
export function ExampleActivityCarousel() {
  const activities: ActivityItemExample[] = [
    {
      id: '1',
      sport: Sport.FOOTBALL,
      date: '19 dic',
      time: '10:00',
      duration: '90 min',
      level: 'Intermedio',
      creator: {
        id: 'c1',
        name: 'Roberto Silva',
        avatarUrl: 'https://i.pravatar.cc/150?img=10',
      },
      participants: [
        {
          id: 'p1',
          name: 'Juan Pérez',
          avatarUrl: 'https://i.pravatar.cc/150?img=1',
        },
        {
          id: 'p2',
          name: 'María García',
          avatarUrl: 'https://i.pravatar.cc/150?img=2',
        },
        {
          id: 'p3',
          name: 'Carlos López',
          avatarUrl: 'https://i.pravatar.cc/150?img=3',
        },
      ],
    },
    {
      id: '2',
      sport: Sport.BASKETBALL,
      date: '20 dic',
      time: '19:30',
      duration: '60 min',
      level: 'Intermedio',
      creator: {
        id: 'c2',
        name: 'Carmen Morales',
        avatarUrl: 'https://i.pravatar.cc/150?img=11',
      },
      participants: [
        {
          id: 'p4',
          name: 'Ana Rodríguez',
          avatarUrl: 'https://i.pravatar.cc/150?img=4',
        },
        {
          id: 'p5',
          name: 'Luis Martín',
          avatarUrl: 'https://i.pravatar.cc/150?img=5',
        },
        {
          id: 'p6',
          name: 'Elena Silva',
          avatarUrl: 'https://i.pravatar.cc/150?img=6',
        },
        {
          id: 'p7',
          name: 'Miguel Torres',
          avatarUrl: 'https://i.pravatar.cc/150?img=7',
        },
      ],
    },
    {
      id: '3',
      sport: Sport.TENNIS,
      date: '21 dic',
      time: '16:00',
      duration: '60 min',
      level: 'Intermedio',
      creator: {
        id: 'c3',
        name: 'Alejandro Vega',
        avatarUrl: 'https://i.pravatar.cc/150?img=12',
      },
      participants: [
        {
          id: 'p8',
          name: 'Sofia Ruiz',
          avatarUrl: 'https://i.pravatar.cc/150?img=8',
        },
        {
          id: 'p9',
          name: 'David Castro',
          avatarUrl: 'https://i.pravatar.cc/150?img=9',
        },
      ],
    },
  ];

  const renderActivityCard = (activity: ActivityItemExample) => (
    <ActivitySquareCard
      sport={activity.sport}
      date={activity.date}
      time={activity.time}
      duration={activity.duration}
      level={activity.level}
      participants={activity.participants}
      creator={activity.creator}
      onPress={() => handleActivityPress(activity)}
    />
  );

  const handleActivityPress = (activity: ActivityItemExample) => {
    console.log(
      `Activity pressed: ${activity.sport} with ${activity.participants.length} participants`
    );
  };

  return (
    <CardCarousel
      title='Próximas actividades'
      items={activities}
      renderCard={renderActivityCard}
      onItemPress={handleActivityPress}
      horizontal={true}
      contentPadding={16}
      itemSpacing={12}
    />
  );
}

// Example 2: Custom Card Type
interface CustomItem {
  id: string;
  title: string;
  subtitle: string;
  color: string;
}

export function ExampleCustomCarousel() {
  const customItems: CustomItem[] = [
    { id: 'c1', title: 'Custom 1', subtitle: 'Subtitle 1', color: '#FF6B6B' },
    { id: 'c2', title: 'Custom 2', subtitle: 'Subtitle 2', color: '#4ECDC4' },
    { id: 'c3', title: 'Custom 3', subtitle: 'Subtitle 3', color: '#45B7D1' },
  ];

  const renderCustomCard = (item: CustomItem) => (
    <View
      style={{
        width: 120,
        height: 80,
        backgroundColor: item.color,
        borderRadius: 8,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>
        {item.title}
      </Text>
      <Text style={{ color: 'white', fontSize: 12, opacity: 0.8 }}>
        {item.subtitle}
      </Text>
    </View>
  );

  return (
    <CardCarousel
      title='Custom Cards'
      items={customItems}
      renderCard={renderCustomCard}
      onItemPress={(item, index) => console.log(`Custom card: ${item.title}`)}
      horizontal={true}
      itemSpacing={8}
    />
  );
}
