import React, {Fragment} from "react";
import {View, Text} from "react-native";
import Estilo from "./estilo";

export default props =>{

    return(
        <View>
            <Text style={Estilo.txtG}>{props.principal}</Text>
            <Text>{props.segundario}</Text>
        </View>
    )

    //Outras opções

    //Exemplo 01:

    // return(
    //     <React.Fragment>
    //         <Text style={Estilo.txtG}>{props.principal}</Text>
    //         <Text>{props.segundario}</Text>
    //     </React.Fragment>
    // )

    //Exemplo 02:

    // return(
    //     <Fragment>
    //         <Text style={Estilo.txtG}>{props.principal}</Text>
    //         <Text>{props.segundario}</Text>
    //     </Fragment>
    // )

    //Exemplo 03:
    //OBS: Não consegue usar propriedades nesse caso

    // return(
    //     <>
    //         <Text style={Estilo.txtG}>{props.principal}</Text>
    //         <Text>{props.segundario}</Text>
    //     </>
    // )

}