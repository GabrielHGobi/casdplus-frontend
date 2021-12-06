import React,{useState, useContext, useEffect } from "react";
import { RefreshControl,
         ScrollView, 
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

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};
const CalendarScreen = () => {
  const { state, getEvents } = useContext(CalendarContext);
  getEvents();
  // console.log(state.events)
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Atividade ' + strTime + ' #' + j,
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      console.log(newItems);
      setItems(newItems);
    }, 1000);
  };

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
          <Header title='Calendário dos ano' />

          <ScrollView style={{width: "100%",}}
          refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />  }
          >

            <Agenda
              items={items}
              loadItemsForMonth={loadItems}
              selected={'2017-05-16'}
              renderItem={renderItem}
              theme={{
                backgroundColor: '#E2F6FE',
                calendarBackground: '#ffffff',
                dotColor: '#61CBF1',
                selectedDayBackgroundColor:'#FBC979',
              }}
            />
          </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
