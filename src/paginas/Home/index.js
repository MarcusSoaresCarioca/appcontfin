import React, { useState } from "react";
import styles from "./style";
import { View, Text, TextInput, TouchableOpacity, FlatList, StatusBar } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


export default function Home() {

    const [receita, setReceita] = useState(null);
    const [despesa, setDespesa] = useState(null);
    const [lista, setLista] = useState([]);

    function registrar() {
        if (receita !== null && receita !== "") {
            let numeroAl = receita * Math.random(2)
            setLista((arr) => [...arr, {
                id: numeroAl,
                valor: receita,
                tipo: 1 //receita
            }])
            setReceita(null);
        }
        else if (despesa !== null && despesa !== "") {
            let numeroAl = receita * Math.random(2)
            setLista((arr) => [...arr, {
                id: numeroAl,
                valor: despesa,
                tipo: 2 //despesas
            }])
            setDespesa(null);
        }
        else {
            alert('Preencha um dos campos !!!')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.divTop}>
                <View style={styles.divInputs}>
                    <TextInput
                        style={styles.inputReceitas}
                        placeholder='Receitas'
                        value={receita}
                        onChangeText={setReceita}
                        keyboardType='numeric'>

                    </TextInput>

                    <TextInput
                        style={styles.inputDespesas}
                        placeholder='Despesas'
                        value={despesa}
                        onChangeText={setDespesa}
                        keyboardType='numeric'>

                    </TextInput>
                </View>

                <View style={styles.divbtn}>
                    <TouchableOpacity onPress={registrar}>
                        <FontAwesome name="send-o" size={70} color="#fff" />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.divTitulo}>
                <Text style={styles.txtTitulo}>Controle Financeiro</Text>
            </View>

            <View style={styles.divLista}>
                <FlatList
                    style={{ width: '100%' }}
                    data={lista}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={item.tipo === 1 ? styles.itemListaReceita : styles.itemListaDespesa}>
                                <Text style={styles.txtTipo}>{item.tipo === 1 ? "Receita" : "Despesas"}</Text>
                                <Text style={styles.valorItem}> {item.tipo === 1 ? "R$" : "R$-"}{item.valor}</Text>
                            </View>
                        )
                    }}>


                </FlatList>
            </View>

        </View>
    )
}