import {NavigationContainer} from '@react-navigation/native-stack';
import ShopNavigator from './shop';

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <ShopNavigator/>
        </NavigationContainer>
    );
};

export default AppNavigator;
