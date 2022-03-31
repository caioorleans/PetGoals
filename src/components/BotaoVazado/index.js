import React from 'react'
import {View,Text, Image, TextInput, TouchableHighlight} from 'react-native'

import style from './style.js'

export default ({texto}) => {
    return(
        <TouchableHighlight style={style.containerBotao} onPress={() => {}}>
            <Text style={style.texto}>{texto}</Text>
        </TouchableHighlight>
    )
}