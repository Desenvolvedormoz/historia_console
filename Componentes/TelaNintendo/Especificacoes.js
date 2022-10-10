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
    <Text style={estilos.textCorpo}>Confira a seguir as especificações técnicas do NES, lançado em 1983</Text>
    <View style={estilos.containerPai}>

    <View style={estilos.containerVermelho}>
    <Image source={Cpu} style={estilos.imageIcon}/>
    <Text style={estilos.cardTexto}>Processador: Ricoh 2A03 - Processador 8-bit</Text>
    </View>

    <View style={estilos.containerVermelho}>
    <Image source={Gpu} style={estilos.imageIcon}/>
    <Text style={estilos.cardTexto}>GPU: 52 Cores - 256 x 240</Text>
    </View>
        
    <View style={estilos.containerVermelho}>
    <Image source={Ram} style={estilos.imageIcon}/>
    <Text style={estilos.cardTexto}>RAM: 2KB RAM - Memória</Text>
    </View>
                    
    <View style={estilos.containerVermelho}>
    <Image source={Hdd} style={estilos.imageIcon}/>
    <Text style={estilos.cardTexto}>Armazenamento: Cartucho - Proprietário</Text>
    </View>
                
</View>
</View>
    )
}