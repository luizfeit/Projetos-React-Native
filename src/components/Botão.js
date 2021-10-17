import React from "react";
import { Button } from "react-native";

export default props => {

    function executar() {
        console.warn("Executando #01!!!")
    }

    return (

        <>
            <Button
                title="Executar #01!"
                onPress={executar} // Fazendo referencia a função, é diferente de executa-lá        
            />

            <Button
                title="Executar #02!"
                onPress={function () {
                    console.warn("Executando #02!!!") //Crinado a propria função dendo da propriedade
                }}
            />

            <Button
                title="Executar #03!"
                onPress={() => console.warn("Executando #03!!!")} //Função anonima
            />
        </>
    )
}

// Ex: executar -> Referenciando; executar() -> executando a função.