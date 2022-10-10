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
       
        <View style={estilos.containerPai}>
           
            <View style={estilos.containerPlayStation}>
            <Image source={Cpu} />
            <Text style={estilos.cardTexto}>Processador: Sony CXD8530BQ - 33.8688 MHz</Text>
            </View>

            <View style={estilos.containerPlayStation}>
            <Image source={Gpu} style={estilos.imageIcon} />
            <Text style={estilos.cardTexto}>GPU: Sony CXD8514Q - 1MB VRAM</Text>
            </View>

            <View style={estilos.containerPlayStation}>
            <Image source={Ram} style={estilos.imageIcon}/>
            <Text style={estilos.cardTexto}>RAM: 2 MB EDO DRAM - 33 MHz</Text>
            </View>

            <View style={estilos.containerPlayStation}>
            <Image source={Hdd} style={estilos.imageIcon}/>
            <Text style={estilos.cardTexto}>Armazenamento: Drive de CD-ROM - 660 MB / disco</Text>
            </View>

        </View>
    </View>
    )
}