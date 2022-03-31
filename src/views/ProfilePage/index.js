import React, {useState} from 'react'
import {View,Text, Image, TextInput} from 'react-native'

import style from './style.js'

import ProfPic from '../../assets/profPic.jpg'

export default () => {
    
    return(
        <>
            <View style={style.containerPerfil}>
                <Image source={ProfPic} style={style.profPic}/>
                <View style={style.containerNomePontuacao}>
                    <View style={style.containerNome}>
                        <Text style={style.nome}>Caio Orleans</Text>
                        <Image source={ProfPic} style={style.botomImage}/>
                    </View>
                    <Text style={style.pontuacao}>100 pontos</Text>
                </View>
            </View>
        </>
    )
}