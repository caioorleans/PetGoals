import React, {useState} from 'react'
import {View,Text, Image, TextInput, TouchableHighlight} from 'react-native'

import style from './style.js'

import Logo from '../../assets/logo.png'

import Input from '../../components/InputPersonalizado'
import BotaoCheio from '../../components/BotaoCheio'
import BotaoVazado from '../../components/BotaoVazado'

export default () => {
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)

    function login(){
        console.warn("E-mail: " + email + "/nSenha: " + senha)
    }

    return(
        <>
            <View style={style.containerCredenciais}>
              <Image source={Logo} style={style.logo}/>
              <Input placeholder="E-mail" funcao={setEmail}/>
              <Input placeholder="Senha"/>
              <View style={style.containerLink}>
                  <TouchableHighlight onPress={() => {}}>
                    <Text style={style.linkSenha}>Esqueceu a senha?</Text>
                  </TouchableHighlight>
              </View>
              <BotaoCheio texto="Entrar" funcao={login}/>
            </View>
            <View style={style.containerCadastro}>
                <Text style={style.textoSolto}>ou</Text>
                <BotaoVazado texto="Cadastre-se"/>
            </View>
        </>
    )
}