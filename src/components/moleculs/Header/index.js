import React from 'react'
import { colorBlur, colorDark, colorPrimary } from '../../../containers/utils/color'
import Wrapper from '../../atoms/Wrapper'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Header = ({isChat}) => {
    const navigation = useNavigation();
    return (
        <Wrapper style={{height:50,backgroundColor:'#fff',borderColor:colorBlur, borderBottomWidth:1, justifyContent:'center'}}>
            <TouchableOpacity onPress={() => {navigation.goBack()}} style={{flexDirection:'row'}}>
                <FontAwesomeIcon icon={faArrowLeft} size={20} style={{color:colorDark}}/>
                {isChat && <Text style={{fontSize:14, color:'#888', marginLeft:10}}>Terhubung dengan RoboSim</Text>}
            </TouchableOpacity>
        </Wrapper>
    )
}

export default Header
