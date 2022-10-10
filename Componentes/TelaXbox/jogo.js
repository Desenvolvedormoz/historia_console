import React from "react";
import { View, Text, Image } from 'react-native';
import estilos from "../../assets/Estilos/estilos";
import Disco from '../../assets/jogo/disc.png';
import Money from '../../assets/jogo/money.png';
import Ranking from '../../assets/jogo/ranking.png';
import Sales from '../../assets/jogo/sales.png';


export default function Jogo(){
    return(
        <View style={estilos.container}>
            <Text style={estilos.texto}>O fenômeno Halo</Text>
            <Text style={estilos.textCorpo}>Halo: Combat Evolved foi desenvolvido pela Bungie e lançado para o Xbox no dia 15 de novembro de 2001. O game foi um sucesso e em dois meses já estava presente em 50% da base de consoles Xbox.</Text>
            <Text style={estilos.textCorpo}>Halo é até hoje um dos jogos mais importantes do Xbox e da indústria como um tudo. Confira a seguir alguns dados sobre o primeiro título da principal franquia do Xbox.</Text>
        <View style={estilos.containerPai}>
        <View style={estilos.containerFilho}>
            <Image source={Disco} style={estilos.imageIcon}/>
            <Text>4.7 milhões de cópias</Text>
            <Text>Até Julho de 2006</Text>
        </View>
        <View style={estilos.containerFilho}>
             <Image source={Money} style={estilos.imageIcon}/>
             <Text>US$ 170 milhões</Text>
            <Text>Apenas nos EUA</Text>
        </View>
        <View style={estilos.containerFilho}>
            <Image source={Ranking} style={estilos.imageIcon}/>
            <Text>97% de Aprovação</Text>
            <Text>Metacritic</Text>
        </View>
        <View style={estilos.containerFilho}>
            <Image source={Sales} style={estilos.imageIcon}/>
            <Text>Remake em 2014</Text>
            <Text>Para o Xbox One</Text>
        </View>
        </View>
        </View>
    )
}