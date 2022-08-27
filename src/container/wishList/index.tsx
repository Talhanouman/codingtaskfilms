import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react';
import { useSelector } from 'react-redux';
import { FAV_LIST } from '../../redux/counterSlice';
import { Header } from '../../components';
import styles from './styles';

const WishList = () => {
    const favouriteItems = useSelector(FAV_LIST);
    console.log("favouriteItems", favouriteItems)
    return (
        <SafeAreaView>
            <Header heading='WishList' />
            <ScrollView>
                {favouriteItems?.map((item, index) => (
                    <View style={styles.item} key={item?.id} >
                        <Image style={styles.image} source={{ uri: item?.primaryImage?.url }} />
                        <Text>{item?.primaryImage?.caption?.plainText}</Text>

                    </View>
                ))}


            </ScrollView>
        </SafeAreaView>
    )
}

export default WishList

