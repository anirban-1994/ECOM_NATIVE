import {SiteLog} from './SiteLog/SiteLog';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AMC} from './AMC/AMC';
import {NavigationContainer} from '@react-navigation/native';
import {Renewal} from './Renewal/Renewal';
import {Contact} from './Contact/Contact';

const Tab = createMaterialTopTabNavigator();
export const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SiteLog" component={SiteLog} />
        <Tab.Screen name="AMC" component={AMC} />
        <Tab.Screen name="Renewal" component={Renewal} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
