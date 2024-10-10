
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HelloWorld() {
    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Ola mundo!</Text>
     

      <TouchableOpacity
        onPress={()=> navigation.navigate('Alunos')}>
        <Text style={styles.button} > Lista de alunos</Text>
        
        </TouchableOpacity>  
         
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  hello:{
    fontSize:40,
  },
  button: {
    fontSize: 18,
    color: 'blue',
    marginTop: 10,
  }
}); 