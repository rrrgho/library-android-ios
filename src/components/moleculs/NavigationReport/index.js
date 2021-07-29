import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import { Text, StyleSheet, View } from 'react-native';
import { faBook, faHistory, faHome, faUserShield } from '@fortawesome/free-solid-svg-icons';
import theme1 from '../../atoms/ColorPrimary';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const NavigationReport = ({Profile},props) => {
    const navigation = useNavigation();
    return  (
        <View style={[styles.container]}>
            <TouchableOpacity onPress={() => {navigation.navigate('BooksPage')}} style={styles.boxNav}>
                <View style={styles.iconBox}>
                    <FontAwesomeIcon style={{color:'#888'}} size={25} icon={ faHome }/>
                    <Text style={{color:'#888', marginTop:5}}>Home</Text>
                </View>
                {/* <Text style={styles.iconText}>Buku</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('BooksPage')}} style={styles.boxNav}>
                <View style={styles.iconBox}>
                    <FontAwesomeIcon style={{color:'#888'}} size={25} icon={ faBook }/>
                    <Text style={{color:'#888', marginTop:5}}>Buku</Text>
                </View>
                {/* <Text style={styles.iconText}>Buku</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('HistoryPage')}} style={styles.boxNav}>
                <View style={styles.iconBox}>
                    <FontAwesomeIcon style={{color:'#888'}} size={25} icon={ faHistory }/>
                    <Text style={{color:'#888', marginTop:5}}>Riwayat</Text>
                </View>
                {/* <Text style={styles.iconText}>History</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('ProfilePage')}} style={styles.boxNav}>
                <View style={styles.iconBox}>
                    <FontAwesomeIcon style={{color:'#888'}} size={25} icon={ faUserShield }/>
                    <Text style={{color:'#888', marginTop:5}}>Akun</Text>
                </View>
                {/* <Text style={styles.iconText}>Profile</Text> */}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 70,
        backgroundColor:'#fff',
        // borderRadius:100,
        borderWidth:1,
        borderColor:'#ddd',
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-around',
        alignContent:'center',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10
    },
    boxNav:{
        width:100,
        height:undefined,
        backgroundColor:'#fff',
        // marginTop:8,
        alignItems:'center',
        justifyContent:'center',
    },
    iconBox:{
        width:50,
        height:50,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    iconText:{
        marginTop:6,
        textTransform: 'uppercase',
        fontSize:12,
        textAlign:'center'
    }
})

export default NavigationReport