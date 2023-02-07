import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';

const Categories = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> Categorías </Text>
            <Button
            title='Ir a productos'
            onPress={()=> navigation.navigate('Products')}
            color='#000'/>
        </View>
    );
};

export default Categories;