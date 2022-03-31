import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    containerPerfil:{
        height: 150,
        flexDirection:'row',
        margin: 20,
        padding: 25,
        backgroundColor: '#F5F5F5',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    nome:{
        color: '#FC8721',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10
    },
    profPic:{
        flex: 1,
        resizeMode: 'contain',
        marginRight: 25,
    },
    containerNome:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    botomImage:{
        width: 15,
        resizeMode: 'contain',
    },
    pontuacao:{
        color: '#666666',
        fontSize: 22,
    },
    containerNomePontuacao:{
        alignItems: 'flex-start',
        justifyContent:'center'
    }
});