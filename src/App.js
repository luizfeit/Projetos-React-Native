import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'

// import Titulo from './components/Titulo'
// import CompPadrao, { Comp1, Comp2 } from "./components/Multi"
// import Primeiro from './components/Primeiro'
// import Minmax from './components/Minmax'
// import Aleatorio from './components/Aleatorio'
// import Botão from './components/Botão'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
// import Pai from './components/indireta/Pai'
// import ContadorV2 from './components/contador/ContadorV2'
// import Diferenciar from './components/Diferenciar'
// import ParImpar from './components/ParImpar'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import UsuarioLogado from './components/UsuarioLogado'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import FlexBoxV1 from './components/layout/FlexboxV1'
// import FlexboxV2 from './components/layout/FlexboxV2'
// import FlexboxV3 from './components/layout/FlexboxV3'
// import FlexboxV4 from './components/layout/FlexboxV4'
import Mega from './components/mega/Mega'




export default () =>(
    <SafeAreaView style = {style.App}>
        
        <Mega qtdeNumeros={12} />

        {/*<Botão />
        <FlexboxV4 />
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexBoxV1 />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{nome: "Gui", email: "gui@gui.com"}} />
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
        </Familia>
        
        <ParImpar num={3} />
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Pai />
        <Contador inicial={100} passo={13} />
        <Contador />
        <Titulo principal="Cadastro do Produto" segundario="Tela de Cadastro do produto" />
        <Aleatorio min={1} max={60} />
        <Minmax min={3} max={20} /> 
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> 
        */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        //backgroundColor: "#A00" => Colocando um backgroud vermelho
        flexGrow: 1, //Mostrando queele pode ocupar a tela inteira
        justifyContent: "center", //Alinhando no eixo da linha
        alignItems: "center", //Alinhando no ponto cruzado
        padding: 20,
    }
})
