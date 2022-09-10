import {SiteLog} from './SiteLog/SiteLog';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AMC} from './AMC/AMC';
import {NavigationContainer} from '@react-navigation/native';
import {Renewal} from './Renewal/Renewal';
import {Contact} from './Contact/Contact';
import {kAMC, kContact, kRenewal, kSiteLog} from '../Common/Constants';

const Tab = createMaterialTopTabNavigator();

export const Main = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name={kSiteLog} component={SiteLog} />
          <Tab.Screen name={kAMC} component={AMC} />
          <Tab.Screen name={kRenewal} component={Renewal} />
          <Tab.Screen name={kContact} component={Contact} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
