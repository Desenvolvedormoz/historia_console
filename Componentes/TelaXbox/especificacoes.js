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
        <Text style={estilos.textCorpo}>Confira a seguir as especificações técnicas do Xbox de 2001</Text>
        
    <View style={estilos.containerPai}>

        <View style={estilos.containerFilho}>
        <Image source={Cpu} style={estilos.imageIcon} />
        <Text style={estilos.cardTexto}>Processador: Intel Pentium 3 - 733 MHz</Text>
        </View>

        <View style={estilos.containerFilho}>
        <Image source={Gpu} style={estilos.imageIcon} />
        <Text style={estilos.cardTexto}>GPU: nVidia NV2A - 233 MHz</Text>
        </View>
                        
        <View style={estilos.containerFilho}>
       <Image source={Ram} style={estilos.imageIcon}/>
        <Text style={estilos.cardTexto}>RAM: 64 MB DDR SDRAM - 200 MHz</Text>
        </View>

        <View style={estilos.containerFilho}>
        <Image source={Hdd} style={estilos.imageIcon}/>
        <Text style={estilos.cardTexto}>Armazenamento: HD 8GB - 5400 RPM</Text>
        </View>
    </View>
    </View> 
    )
}