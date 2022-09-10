import {SiteLog} from './SiteLog/SiteLog';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AMC} from './AMC/AMC';
import {NavigationContainer} from '@react-navigation/native';
import {Renewal} from './Renewal/Renewal';
import {Contact} from './Contact/Contact';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {About} from './About/About';
import {Blog} from './Blog/Blog';

const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

export const Main = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Contact" component={Contact} />
          <Drawer.Screen name="Blog" component={Blog} />
        </Drawer.Navigator>
        <Tab.Navigator>
          <Tab.Screen name="SiteLog" component={SiteLog} />
          <Tab.Screen name="AMC" component={AMC} />
          <Tab.Screen name="Renewal" component={Renewal} />
          <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
