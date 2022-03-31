import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    containerCredenciais: {
      backgroundColor: '#F4F4F4',
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      padding: 20,
    },
    containerCadastro:{
        flex:1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
    },
    logo:{
        marginBottom: 20
    },
    linkSenha:{
        color: '#1985A1',
        textDecorationLine: 'underline'
    },
    containerLink:{
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 30
    },
    textoSolto:{
        marginTop: 20,
        marginBottom: 30,
        color: '#AEAEAE',
        fontSize: 24
    }
});