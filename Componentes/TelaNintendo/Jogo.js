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
            <Text style={estilos.texto}>Super Mario bros</Text>
            <Text style={estilos.textCorpo}>Apesar de não estar disponível no lançamento do console, Super Mario Bros foi o jogo mais vendido do NES e é uma das franquias de jogos mais populares até os dias de hoje.</Text>
            <Text style={estilos.textCorpo}>A franquia foi tão popular na época, que 3 jogos da série Super Mario ocupam o top 4 de jogos mais vendidos do NES, com Super Mario Bros em primeiro, Super Mario Bros 3 em segundo e Super Mario Bros 2 em quarto lugar. Confira mais informações sobre o primeiro jogo da franquia Super Mario Bros:</Text>
        <View style={estilos.containerPai}>
        <View style={estilos.containerVermelho}>
            <Image source={Disco} style={estilos.imageIcon}/>
            <Text>40 milhões de cópias</Text>
            <Text>Até 1994</Text>
        </View>
        <View style={estilos.containerVermelho}>
             <Image source={Money} style={estilos.imageIcon}/>
             <Text>US$ 72 milhões</Text>
            <Text>Primeiros 4 meses</Text>
        </View>
        <View style={estilos.containerVermelho}>
            <Image source={Ranking} style={estilos.imageIcon}/>
            <Text>95% de Aprovação</Text>
            <Text>Revista CVG</Text>
        </View>
        <View style={estilos.containerVermelho}>
            <Image source={Sales} style={estilos.imageIcon}/>
            <Text>Remake em 1993</Text>
            <Text>Para o SNES</Text>
        </View>
        </View>
        </View>
    )
}
