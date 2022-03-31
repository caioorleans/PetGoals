import React from 'react'
import {View,Text, Image, TextInput} from 'react-native'

import style from './style.js'

export default ({placeholder}) => {
    
    return(
        <View style={style.containerInput}>
            <TextInput placeholder={placeholder} placeholderTextColor='#646464'/>
        </View>
    )
}