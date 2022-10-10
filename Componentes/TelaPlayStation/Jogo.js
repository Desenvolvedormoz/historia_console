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
            <Text style={estilos.texto}>Final Fantasy VII</Text>
            <Text style={estilos.textCorpo}>Um dos jogos mais aclamados do PS1 sem dúvida é Final Fantasy VII. Desenvolvido pela Square e Lançado em 1997 Final Fantasy VII foi um sucesso comercial absoluto, além de ter sido muito bem recebido pelo público e pela crítica especializada.</Text>
            <Text style={estilos.textCorpo}>Final Fantasy VII foi um lançamento muito importante para a Sony, isso porque semanas antes do lançamento os consoles PlayStation estavam esgotados por todo Japão, tamanho era o interesse dos jogadores pelo novo título da franquia. Alcançando marcas incríveis, como podem ser vistas a seguir: </Text>
        <View style={estilos.containerPai}>
        <View style={estilos.containerPlayStation}>
            <Image source={Disco} style={estilos.imageIcon}/>
            <Text>2 milhões de cópias</Text>
            <Text>Em 2 dias no Japão</Text>
        </View>
        <View style={estilos.containerPlayStation}>
             <Image source={Money} style={estilos.imageIcon}/>
             <Text>US$ 115 milhões</Text>
            <Text>Em 2 dias no Japão</Text>
        </View>
        <View style={estilos.containerPlayStation}>
            <Image source={Ranking} style={estilos.imageIcon}/>
            <Text>92% de Aprovação</Text>
            <Text>Metacritic</Text>
        </View>
        <View style={estilos.containerPlayStation}>
            <Image source={Sales} style={estilos.imageIcon}/>
            <Text>Remake em 2020</Text>
            <Text>Para o PS4</Text>
        </View>
        </View>
        </View>
    )
}