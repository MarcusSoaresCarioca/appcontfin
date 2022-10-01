import React, { useState } from "react";
import styles from "./style";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons';

export default function Home() {

    const [receitas, setReceitas] = useState(null);
    const [despesas, setDespesas] = useState(null);


    return (
        <View style={styles.container}>
            
            <View style={styles.divForm}>
                <View style={styles.divInput1}>
                    <TextInput style={styles.txtinput}
                        placeholder="Receitas"
                        keyboardType="numeric"
                        value={''}
                        onChangeText={''}></TextInput>
                </View>
                <View style={styles.divInput2}>
                    <TextInput style={styles.txtinput}
                        placeholder="Despesas"
                        keyboardType="numeric"
                        value={''}
                        onChangeText={''}></TextInput>
                </View>

                <TouchableOpacity style={styles.divIcon}>
                    <Feather name="navigation" size={50} color="#fff" />
                </TouchableOpacity>

              

                <View style={styles.divFinanceiro}>
                    <Text style={styles.txtfinanceiro}>Controle Financeiro</Text>
                </View>
                
           
                </View>

                
                
            


            <View style={styles.divResult}>
                
            </View>
        </View>
    )
}