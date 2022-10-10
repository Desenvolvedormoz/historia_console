import React from "react";
import { ScrollView } from "react-native";
import Jogo from "./Jogo";
import Especificacoes from "./Especificacoes";
import Historia from "./Historia";
import Conclusao from "./Conclusao";

export default function TelaPlayStation(){
    return(
        <ScrollView>
            <Historia />
            <Especificacoes />
            <Jogo />
            <Conclusao />
        </ScrollView>
    )
};