//React Imports
import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {processColor, ProcessedColorValue, ViewProps} from 'react-native';
import MapView, { Marker }  from 'react-native-maps';
import { PROVIDER_GOOGLE }  from 'react-native-maps';
/*import decorateMapComponent, {
  MapManagerCommand,
  NativeComponent,
  ProviderContext,
  SUPPORTED,
  UIManagerCommand,
  USES_DEFAULT_IMPLEMENTATION,
} from './decorateMapComponent'; */
import {LatLng} from './sharedTypes';
import {Modify} from './sharedTypesInternal';

//Page Imports EG: Login Page, Profile Page ect...
import LoginPage from "./LoginPage"


//adding this line for a reason i cannot disclose at this time


//Button and Color Imports


const Tab = createBottomTabNavigator();

export type MapHeatmapProps = ViewProps & {};

type NativeProps = Modify<
  MapHeatmapProps,
  {
    gradient?: Modify<
      MapHeatmapProps['gradient'],
      {colors: (ProcessedColorValue | null | undefined)[]}
    >;
  }
> & {
  ref: React.RefObject<View>;
};

export class MapHeatmap extends React.Component<MapHeatmapProps> {
  // declaration only, as they are set through decorateMap
  // declare context: React.ContextType<typeof ProviderContext>;
  getNativeComponent!: () => NativeComponent<NativeProps>;
  getMapManagerCommand!: (name: string) => MapManagerCommand;
  getUIManagerCommand!: (name: string) => UIManagerCommand;

  private heatmap: NativeProps['ref'];

  constructor(props: MapHeatmapProps) {
    super(props);
    this.heatmap = React.createRef<View>();
  }

  setNativeProps(props: Partial<NativeProps>) {
    this.heatmap.current?.setNativeProps(props);
  }

  render() {
    const AIRMapHeatmap = this.getNativeComponent();
    const propGradient = this.props.gradient;
    let gradient: NativeProps['gradient'];
    if (propGradient) {
      const colors = propGradient.colors.map(c => processColor(c));
      gradient = {...propGradient, colors};
    }
    return (
      <AIRMapHeatmap {...this.props} gradient={gradient} ref={this.heatmap} />
    );
  }
}
/*
export default decorateMapComponent(MapHeatmap, 'Heatmap', {
  google: {
    ios: SUPPORTED,
    android: USES_DEFAULT_IMPLEMENTATION,
  },
});
*/
type WeightedLatLng = LatLng & {
  weight?: number;
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
       height: 400,
       width: 400,
       justifyContent: 'flex-end',
       alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

function HomeScreen() {
    return (
          <View style={styles.container}>
            <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}
                  >
            </MapView>

          </View>
    );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Customize Your Profile!</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        position: 'absolute',
        height: 100,
        bottom: 25,
        left: 25,
        right: 25,
        elevation: 0,
        borderRadius: 15,
        backgroundColor: 'rgba(137, 196, 244, 1)'
      },
      tabBarShowLabel: false
    }}>
      <Tab.Screen name="Home"
        component={HomeScreen} 
        options={{
          tabBarIcon:() => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image 
              source={require('./assets/maybe_the_one.png')}
              style={{
                aspectRatio: '3/2',
                width: 70,
                height: 50
              }}
              >
              </Image>
              <Text>
                Music Map!
              </Text>
            </View>
            )
        }}
      />
      <Tab.Screen 
        name="Settings"
        component={SettingsScreen} 
        options={{
          tabBarIcon:() => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image 
              source={require('./assets/settingsicon.png')}
              style={{
                width: 50,
                height: 50
              }}
              >
              </Image>
              <Text>
                Settings
              </Text>
            </View>
            )
        }}
    />
      <Tab.Screen 
        name="Profile"
        component={ProfileScreen} 
        options={{
          tabBarIcon:() => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image 
              source={require('./assets/best_profile_image.png')}
              style={{
                aspectRatio:'357/580',
                width: 50,
                height: 50
              }}
              >
              </Image>
              <Text>
                Profile
              </Text>
            </View>
            )
        }}
    />
    </Tab.Navigator>
  );
}




function App(): React.JSX.Element {
  //<LoginPage /> goes in navCont when wanting home page
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  ); 
}

export default App;
