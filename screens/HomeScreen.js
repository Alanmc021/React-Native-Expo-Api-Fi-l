import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Tab01 from '../tabs/Tab01'
//import Tab2 from './tabTwo';
//import Tab3 from './tabThree';

// Contruir 3 componetes para cada screen do menu superior 

export default class HomeScreen extends Component {
  render() {
    return (
      <Container >
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
          <Tab01/>
          </Tab>
          <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
            {/* <Tab2 /> */}<Text>Aqui vai o componente</Text>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            
          </Tab>
        </Tabs>

        
      </Container>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};
