import React from 'react';
import { View, Text } from 'react-native';
import Estilo from './estilo'

export default ({ num = 0 }) => {

    return (
        <View>
            <Text style={Estilo.txtG}>O Resultado é: </Text>
            {num % 2 === 0
                ? <Text style={Estilo.txtG}>Par</Text>
                : <Text style={Estilo.txtG}>Ímpar</Text>
                // Caso não queira retorna nada, poderá colocar "false".
            }
        </View>
    )

}


//Exemplo 1:

// if (num % 2 == 0) {
//     return (
//         <View>
//             <Text style={Estilo.txtG}> O Resultado é : </Text>
//             <Text style={Estilo.txtG}>Par</Text>
//         </View>

//     )
// }
// else {
//     return (
//         <View>
//             <Text style={Estilo.txtG}> O Resultado é : </Text>
//             <Text style={Estilo.txtG}>Impar</Text>
//         </View>
//     )
// }