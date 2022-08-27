import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react';
import { Header } from '../../components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BaseUrl } from '../../utils/contants';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { getOrganizationListing } from '../../services/httpRequest';

const Home = () => {
    const [actions, setActions] = useState(false);
    const [crime, setCrime] = useState(false);
    const [sciFic, setSciFi] = useState(false);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllMovies();
    }, []);



    const getAllMovies = async () => {
        setLoading(true)
        getOrganizationListing('Action')
            .then((res) => {
                setActions(res?.data?.results);
                getOrganizationListing('Horror')
                    .then((res) => {
                        setCrime(res?.data?.results)
                        getOrganizationListing('Sci-Fi')
                            .then((res) => {
                                setSciFi(res?.data?.results)
                                setLoading(false)

                            })
                    })
            })
            .catch((error) => {
                console.log("error", error);
                setLoading(false)
            })
    };

    const Carousel = ({ item, type }) => (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {
                item, type
            })} style={styles.item}>
                <Image style={styles.image} source={{ uri: item?.primaryImage?.url }} />
            </TouchableOpacity>
        </View>


    )
    const MovieList = ({ type, list }) => {
        return (
            <View style={styles.listView}>
                <Text style={styles.type}>{type}</Text>
                {loading ? <ActivityIndicator size="large" /> :
                    <ScrollView pagingEnabled horizontal>
                        {list?.length && list?.map((item, index) => {
                            return <Carousel type={type} key={index} item={item} />
                        })}
                    </ScrollView>}
            </View >
        )

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header heading={'Home'} />
            <ScrollView>
                <MovieList key={1} type='Action' list={actions} />
                <MovieList key={2} type='Horror' list={crime} />
                <MovieList key={3} type='Sci-Fi' list={sciFic} />

            </ScrollView>

        </SafeAreaView>
    )
}

export default Home

