import React from 'react'
import {View,Text, Image, TextInput, TouchableHighlight} from 'react-native'

import style from './style.js'

export default ({texto, funcao}) => {
    return(
        <TouchableHighlight style={style.containerBotao} onPress={funcao}>
            <Text style={style.texto}>{texto}</Text>
        </TouchableHighlight>
    )
}