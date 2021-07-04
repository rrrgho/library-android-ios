import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import { Text, StyleSheet, View } from 'react-native';
import { faBook, faHistory, faUserShield } from '@fortawesome/free-solid-svg-icons';
import theme1 from '../../atoms/ColorPrimary';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const NavigationReport = ({Profile},props) => {
    const navigation = useNavigation();
    return  (
        <View style={[styles.container]}>
            <TouchableOpacity onPress={() => {navigation.navigate('BooksPage')}} style={styles.boxNav}>
            <LinearGradient colors={[theme1.primaryGradient1, theme1.primaryGradient2]} style={styles.iconBox}>
                    <FontAwesomeIcon style={{color:'#fff'}} size={25} icon={ faBook }/>
                </LinearGradient>
                <Text style={styles.iconText}>Buku</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('HistoryPage')}} style={styles.boxNav}>
            <LinearGradient colors={[theme1.primaryGradient1, theme1.primaryGradient2]} style={styles.iconBox}>
                    <FontAwesomeIcon style={{color:'#fff'}} size={25} icon={ faHistory }/>
                </LinearGradient>
                <Text style={styles.iconText}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('ProfilePage')}} style={styles.boxNav}>
            <LinearGradient colors={[theme1.primaryGradient1, theme1.primaryGradient2]} style={styles.iconBox}>
                    <FontAwesomeIcon style={{color:'#fff'}} size={25} icon={ faUserShield }/>
                </LinearGradient>
                <Text style={styles.iconText}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 90,
        backgroundColor:'#fff',
        borderRadius:100,
        borderWidth:1,
        borderColor:'#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity:  0.1,
        shadowRadius: 3,
        elevation: 2,
        marginTop:-15,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    boxNav:{
        width:100,
        height:undefined,
        backgroundColor:'#fff',
        marginTop:8,
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