import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardAluno({aluno}){
    const navigation = useNavigation();
return(
    <TouchableOpacity
    style={styles.aluno}
    onPress={()=> navigation.navigate('AlunoDetalhes', {aluno})}
    
    >
        <Text>{aluno.nome}</Text>

     </TouchableOpacity>
);
}
const styles = StyleSheet.create({

    aluno:{
        flexDirection:'row',
    margin:10,
    padding:10,
    backgroundColor:'lightblue'
    }
    
    })