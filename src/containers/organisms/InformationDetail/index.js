import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Moment from 'moment'; 

const InformationDetail = (props) => {
    const {data} =  props
    return (
        <View>
            <View style={styles.imageBox}>
                <Image source={{uri: `${data.images}`}} style={{height:'100%', width:'100%', resizeMode:'cover'}} />
            </View>
            <View style={{margin:20, borderStyle:'solid', borderBottomWidth:1, borderColor:'#eee', paddingBottom:10}} >
                <Text style={{textTransform:'uppercase', fontSize:20, color:'#666'}}>{data.name}</Text>
                
                <View style={{flexDirection:'row', marginTop:10}}>
                    <FontAwesomeIcon icon={faBullhorn} style={{color:'#ccc'}} />
                    <Text style={{marginLeft:10, color:'#888'}}>{Moment(data.created_at).format('d MMM YYYY : HH:mm:ss')}</Text>
                </View>
            </View>

            <View style={{marginLeft:20, marginRight:20,  paddingBottom:10}}>
                <Text style={{color:'#888'}}>
                    {data.description}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBox : {
        width:'100%',
        height:200,
        backgroundColor:'red'
    }
})

export default InformationDetail;
