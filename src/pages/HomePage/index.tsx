import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Calendar } from 'antd';

import MainLayout from 'components/layouts/MainLayout';
import Scheduler from 'components/Scheduler';
import { Wrapper, LeftContent, RightContent } from './styles';

const DATE_FORMAT = 'YYYY-MM-DD';
const columns = [
  {
    text: 'Robin'
  },
  {
    text: 'Daisy'
  },
  {
    text: 'Michael'
  }
]

const events = [
  { from: moment('2020-09-12T08:00:00'), to: moment('2020-09-12T09:15:00'), column: 1, content: 'Has appointment with A' },
  { from: moment('2020-09-12T09:00:00'), to: moment('2020-09-12T12:00:00'), column: 2, content: 'Has appointment with B' },
  { from: moment('2020-09-13T10:00:00'), to: moment('2020-09-13T12:15:00'), column: 3, content: 'Has appointment with C' },
  { from: moment('2020-09-13T08:00:00'), to: moment('2020-09-13T09:15:00'), column: 1, content: 'Has appointment with A' },
  { from: moment('2020-09-13T09:00:00'), to: moment('2020-09-13T12:00:00'), column: 2, content: 'Has appointment with B' },
  { from: moment('2020-09-14T10:15:00'), to: moment('2020-09-14T12:30:00'), column: 3, content: 'Has appointment with C' },
  { from: moment('2020-09-14T08:30:00'), to: moment('2020-09-14T09:30:00'), column: 1, content: 'Has appointment with A' },
  { from: moment('2020-09-15T12:00:00'), to: moment('2020-09-15T12:45:00'), column: 2, content: 'Has appointment with B' },
  { from: moment('2020-09-15T14:00:00'), to: moment('2020-09-15T14:30:00'), column: 3, content: 'Has appointment with C' }
];

type Props = {};

const HomePage: React.FC<Props> = () => {
  const [activeEvents, setActiveEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment());

  const onDateChanged = (value: any) => {
    setSelectedDate(value);
  }

  useEffect(() => {
    const filteredEvents: any = events.filter(
      (event: any) => {
        return selectedDate.format(DATE_FORMAT) === event.from.format(DATE_FORMAT); 
      }
    );
    setActiveEvents(filteredEvents);
  }, [selectedDate])

  return (
    <MainLayout>
      <Wrapper>
      <LeftContent>
        <div style={{textAlign: 'left', padding: '8px', color: 'black', fontStyle: 'italic'}}>
          (Data sample have on days 09/12, 09/13, 09/14 and 09/15)
        </div>
        <Calendar 
          fullscreen={false}  
          value={selectedDate}
          onChange={onDateChanged} 
        />
      </LeftContent>
      <RightContent>
        <Scheduler 
          columns={columns} 
          events={activeEvents} 
        />
      </RightContent>
      </Wrapper>
    </MainLayout>
  )
}

export default HomePage;