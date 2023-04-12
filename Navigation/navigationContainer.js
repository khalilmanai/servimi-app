import { TabBar } from "./bottomnav";


function TabScreens() {
  return <TabBar />;
}

function DrawerScreens() {
  return (
    <Drawer.Navigator
      initialRouteName="SecondScreen"
      overlayColor="transparent"
      drawerType="slide"
      drawerStyle={{ flex: 1, width: 240, backgroundColor: "transparent" }}
      hideStatusBar={true}
      sceneContainerStyle={{
        backgroundColor: "transparent",
      }}
      drawerContent={(props) => {
        return <CustomDrawerContent navigation={props.navigation} />;
      }}
      screenOptions={{ drawerPosition: "right", headerShown: false }}
    >
      <Stack.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
}


export {  DrawerScreens, TabScreens };
