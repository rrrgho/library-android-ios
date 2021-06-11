import React from 'react'
import { colorBlur, colorDark } from '../../../containers/utils/color'
import Wrapper from '../../atoms/Wrapper'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
    return (
        <Wrapper style={{height:50,backgroundColor:'#fff',borderColor:colorBlur, borderBottomWidth:1, justifyContent:'center'}}>
            <TouchableOpacity onPress={() => {navigation.goBack();}}>
                <FontAwesomeIcon icon={faArrowLeft} size={20} style={{color:colorDark}}/>
            </TouchableOpacity>
        </Wrapper>
    )
}

export default Header
