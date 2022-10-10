import React from "react";
import { View, Text, Image } from 'react-native';
import Cpu from '../../assets/especificacoes/cpu.png';
import Gpu from '../../assets/especificacoes/gpu.png';
import Hdd from '../../assets/especificacoes/hdd.png';
import Ram from '../../assets/especificacoes/ram.png';
import estilos from "../../assets/Estilos/estilos";

export default function Especificacoes(){
    return(
        <View style={estilos.container}>
        <Text style={estilos.texto}>Especificações Técnicas</Text>
        <Text style={estilos.textCorpo}>Confira a seguir as especificações técnicas do PlayStation, lançado em 1994</Text>
        <View style={estilos.cardContainer}>
            <View style={estilos.cards}>
                <View style={estilos.card}>
                <Image source={Cpu} />
                <Text>Processador: Sony CXD8530BQ - 33.8688 MHz</Text>
                </View>
                <View style={estilos.card}>
                <Image source={Gpu} />
                <Text>GPU: Sony CXD8514Q - 1MB VRAM</Text>
                </View>
                <View style={estilos.cards}>
                    <View style={estilos.card}>
                        <Image source={Ram}/>
                        <Text>RAM: 2 MB EDO DRAM - 33 MHz</Text>
                    </View>
                    <View style={estilos.card}>
                        <Image source={Hdd}/>
                        <Text>Armazenamento: Drive de CD-ROM - 660 MB / disco</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
    )
}