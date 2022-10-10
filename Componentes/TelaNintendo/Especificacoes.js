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
        <View>
            <View>
                <View>
                <Image source={Cpu} />
                <Text>Processador: Ricoh 2A03 - Processador 8-bit</Text>
                </View>
                <View>
                <Image source={Gpu} />
                <Text>GPU: 52 Cores - 256 x 240</Text>
                </View>
                <View>
                    <View>
                        <Image source={Ram}/>
                        <Text>RAM: 2KB RAM - Memória</Text>
                    </View>
                    <View>
                        <Image source={Hdd}/>
                        <Text>Armazenamento: Cartucho - Proprietário</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
    )
}