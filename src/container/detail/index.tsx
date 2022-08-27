import { Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './styles';
import { Header } from '../../components';
import addFav from '../../assets/images/addToFav.png'
import removeFromFav from '../../assets/images/favourited.png'
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, FAV_LIST, FAV_LIST_IDS } from '../../redux/counterSlice';

const Detail = ({ route }) => {
    const { item, type } = route?.params;
    const favouriteListIds = useSelector(FAV_LIST_IDS);
    const favouriteItems = useSelector(FAV_LIST);
    const dispatch = useDispatch();
    console.log("favouriteItems", item)
    return (
        <SafeAreaView style={styles.container}>
            <Header heading={'Detail'} />

            <View style={styles.row}>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={{ uri: item?.primaryImage?.url }} />
                </View>
                <View style={styles.infoView}>
                    <TouchableOpacity onPress={() => dispatch(addToFav(item))}>
                        <Image style={styles.fav} source={!favouriteListIds?.includes(item?.id) ? addFav : removeFromFav} />
                    </TouchableOpacity>
                    <Text style={styles.text}>{item?.primaryImage?.caption?.plainText}</Text>
                </View>
            </View>

            <View style={styles.descriptionView}>
                {type == 'Horror' && <Text> {item?.primaryImage?.height} * {item?.primaryImage?.width}</Text>}
                <Text> {item?.primaryImage?.url}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Detail

