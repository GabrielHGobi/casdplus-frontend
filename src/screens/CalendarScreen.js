import React,{useState, useContext, useEffect } from "react";
import {
         View, 
         StyleSheet, 
         Text,
         TouchableOpacity,
         } from "react-native";

import {Agenda, LocaleConfig} from 'react-native-calendars';
import {Card,Avatar} from 'react-native-paper';

import { Context as CalendarContext } from "../context/CalendarContext";
import Header from "../components/Header";

LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar.','Abr.','Maim','Jun.','Jul.','Ago.','Set.','Out.','Nov.','Dez.'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sab.'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt';



const CalendarScreen = ({ navigation }) => {
  const { state, getEvents } = useContext(CalendarContext);

  useEffect(() => {
    getEvents();
    const listener = navigation.addListener("didFocus", () => {
      getEvents(state.params);
    });
    return () => {
      listener.remove();
    };
  }, []);
  
  console.log(state);

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today =  yyyy+ '-'+  mm + '-' + dd ;
 

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="Z" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
      <View
          style={styles.container}
        >
          <Header title='Calendário do ano' />
          <View style={{flex: 1,width:'100%'}}>
            <Agenda
              items={state.events}
              // loadItemsForMonth={loadItems}
              selected={today}
              renderItem={renderItem}
              theme={{
                backgroundColor: '#E2F6FE',
                calendarBackground: '#ffffff',
                dotColor: '#61CBF1',
                selectedDayBackgroundColor:'#FBC979',
              }}
            />
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3192b3',
  },
  scrollView: {
    // flex: 1,
    backgroundColor: '#3192b3',
    alignItems: 'center',
  },
});

CalendarScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
export default CalendarScreen;
