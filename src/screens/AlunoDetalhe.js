import { View, Text } from "react-native";

export default function AlunoDetalhes({route}){
    const {aluno} = route.params;
    return(
    <View>
        <Text>Detalhes do aluno</Text>
        <Text>Nome: {aluno.nome}</Text>
        <Text>Idade:{aluno.idade}</Text>
        <Text>Curso: {aluno.curso}</Text>
    </View>
    );
}
 