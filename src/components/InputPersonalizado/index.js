import React from 'react'
import {View,Text, Image, TextInput} from 'react-native'

import style from './style.js'

export default ({placeholder, funcao}) => {
    
    return(
        <View style={style.containerInput}>
            <TextInput
                style={style.input}
                placeholder={placeholder} 
                placeholderTextColor='#646464' 
                onChangeText={funcao}/>
        </View>
    )
}