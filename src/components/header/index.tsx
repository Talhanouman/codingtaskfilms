import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { headerType } from '../../interfaces/components';
import styles from './styles';
import back from '../../assets/images/back.png';
import { useNavigation } from '@react-navigation/core';
import addFav from '../../assets/images/addToFav.png'

const Header = ({ heading, wislist }: headerType) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.back} source={back} />
            </TouchableOpacity>
            <Text>{heading}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('WishList')}>
                <Image style={styles.back} source={addFav} />
            </TouchableOpacity>

        </View>
    )
}

export default Header
