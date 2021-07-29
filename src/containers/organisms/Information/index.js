import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
import {GET} from '../../../config/Axios'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

import Carousel from 'react-native-snap-carousel';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { colorPrimary } from '../../utils/color';

const SliderWidth = Dimensions.get('screen').width;

const Information = ({style}) => {
    const navigation = useNavigation();
    const [activeIndex, setActivateIndex] = useState(0); 
    const [carouselState, setCarouselState] = useState();

    const _renderItem =  ({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Information', {data : item})
            }}
            style={{
              backgroundColor: '#000',
              borderRadius: 20,
              height: 'auto',
              width:'100%'
            }}>
            <>
            <View style={styles.boxItem}>
                <Image source={{uri: `${item.images}`}} style={{height:'100%', width:'100%', resizeMode:'cover'}} />
                <View style={styles.informationItem}>
                    
                    <View style={styles.itemIcon}>
                        <FontAwesomeIcon style={{color:'#fff'}} icon={faBullhorn}/>
                    </View>
                    

                    <View style={styles.informationBox}>
                        <Text style={{color:'#fff', fontSize:15}}>{item.name}</Text>
                    </View>

                    
                </View>
            </View>
            </>
          </TouchableOpacity>
        );
      };
    
    useEffect(async () => {
        let request = await GET('/announcement');
        let response = request.data.data
        setCarouselState(response)
    },[])
    
    const shimmer = () => {
        return (
            <View style={styles.boxItem}>

                <View style={styles.informationItem}>
                    <ShimmerPlaceHolder style={{width:'100%', height:'100%',}} />
                    <View style={styles.itemIcon}>
                        <FontAwesomeIcon style={{color:'#fff'}} icon={faBullhorn}/>
                    </View>
                    

                    <View style={styles.informationBox}>
                        <ShimmerPlaceHolder style={{width:'90%', height:30}} />
                    </View>

                    
                </View>
            </View>
        )
    }

    return (
        <View style={[styles.container, style && style.container]}>

            {!carouselState ? shimmer() :
            
                <Carousel
                    layout={'default'}
                    data={carouselState}
                    sliderWidth={SliderWidth + 20}
                    itemWidth={SliderWidth - 60}
                    renderItem={_renderItem}
                    // loop={true}
                    useScrollView
                    onSnapToItem={(index) => setActivateIndex(index)}
                    activeSlideAlignment="center"
                />
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        width:'100%',
        height:200,
        backgroundColor:'#fff',
        padding:5,
        paddingLeft:20,
        paddingRight:20,
        justifyContent:'center',
        alignItems:'center'
    },
    boxItem : {
        width:'100%',
        height:'100%',
        backgroundColor:'transparent',
        borderRadius:20,
        elevation:1,
        overflow:'hidden'
    },
    informationItem : {
        width:'100%',
        height:'100%',
        position:'absolute',
        top:0,
        left:0,
        backgroundColor:'rgba(31, 237, 48,0.2)'
    },
    itemIcon : {
        width:30,
        height:30,
        marginLeft:10,
        marginTop:10,
        backgroundColor:'rgba(0,0,0,0.4)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
    },
    informationBox : {
        width:'80%',
        height:'auto',
        backgroundColor:'rgba(0,0,0,0.5)',
        position:'absolute',
        bottom:10,
        padding:10,
        borderTopRightRadius:50
    }
})

export default Information;
