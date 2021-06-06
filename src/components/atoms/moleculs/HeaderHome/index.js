import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, View, Platform } from 'react-native';
import { faArrowAltCircleLeft, faArrowLeft, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomePage } from '../../../../containers/pages/HomePage';
import { useNavigation } from '@react-navigation/native';

const HeaderHome = (props) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.headerAuth]}>
            
            {/* <TouchableOpacity style={[styles.backBox]} onPress={() => navigation.goBack()}>
                {
                props.goBack ?
                <FontAwesomeIcon style={styles.icon} size={20} icon={faArrowLeft}/>
                :''
                }
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => {navigation.navigate('HomePage')}} style={[styles.backBox]}>
                <FontAwesomeIcon style={styles.icon} size={20} icon={faArrowLeft}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerAuth:{
        width:'100%',
        height:70,
        backgroundColor:'#fff',
        borderRadius:20,
        justifyContent:'space-between',
        flexDirection:'row',
        paddingLeft:5,
        paddingRight:5,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 6 },
        shadowOpacity:  0.1,
        shadowRadius: 3,
        elevation: 2,
        marginBottom:10,
        ...Platform.select({
            android: {
                height:60
            },
        })
    },
    backBox:{
        width:50,
        height:50,
        marginTop:18,
        alignItems:'center',
        justifyContent:'center',
        ...Platform.select({
            android: {
                marginTop:5
            },
        })
    },
    icon:{
        fontSize:90,
        color:'#000',
        opacity:0.8,
    }
})

export default HeaderHome