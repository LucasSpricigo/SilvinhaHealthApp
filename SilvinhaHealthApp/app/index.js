import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import React from 'react'

const menuData = [
    {
        id: '1',
        title: 'Calculadora de IMC',
        route: '/imc',
        color: '#FF6B6B',
        icon: '📊'
    },
    {
        id: '2',
        title: 'Peso Ideal',
        route: '/peso-ideal',
        color: '#4ECDC4',
        icon: '⚖️'
    },
    {
        id: '3',
        title: 'Agua Diaria',
        route: '/agua',
        color: '#45B7B1',
        icon: '💧'
    },
    {
        id: '4',
        title: 'Peso Ideal',
        route: '/peso-ideal',
        color: '#96cEB4',
        icon: '🔥'
    },
];

export default function HomeScreen() {
    const renderMenuItem = ({item}) => {
        <TouchableOpacity
            style={[styles.button, {backgroundColor: item.color}]}
            onPress={() => router.push(item.route)}
            activeOpacity={0.8}        
        >
            <Text style={styles.buttonIcon}>{item.icon}</Text>
            <Text style={styles.buttonText}>{item.title}</Text>
        </TouchableOpacity>
    }
  return (
    <View>
      <Text>ola</Text>
    </View>
  )
}

const styles = StyleSheet.create({})