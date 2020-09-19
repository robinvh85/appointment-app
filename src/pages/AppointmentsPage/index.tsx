import React, { useState, useEffect } from 'react';
import { Button, DatePicker } from 'antd';
import moment from 'moment';

import MainLayout from 'components/layouts/MainLayout';
import Scheduler from 'components/Scheduler';
import { Wrapper, Actions } from './styles';

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

const AppointmentsPage: React.FC<any> = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [activeEvents, setActiveEvents] = useState([]);

  const handleToday = () => {
    setCurrentDate(moment());
  }

  const handlePreviousDay = () => {
    const newDate = currentDate.clone();
    setCurrentDate(newDate.subtract(1, 'day'));
  }

  const handleNextDay = () => {
    const newDate = currentDate.clone();
    setCurrentDate(newDate.add(1, 'day'));
  }

  const handleDateChanged = (value: any) => {
    setCurrentDate(value);
  }

  useEffect(() => {
    const filteredEvents: any = events.filter(
      (event: any) => {
        return currentDate.format(DATE_FORMAT) === event.from.format(DATE_FORMAT); 
      }
    );
    setActiveEvents(filteredEvents);
  }, [currentDate])

  return (
    <MainLayout>
      <Wrapper>
        <Actions>
          <div>
            <Button onClick={handlePreviousDay}>{'<'}</Button>
            <Button onClick={handleToday}>Today</Button>
            <Button onClick={handleNextDay}>{'>'}</Button>
            <DatePicker 
              value={currentDate}
              onChange={handleDateChanged} 
              style={{marginLeft: 16}}
              allowClear={false}
            />
          </div>
          <Button>New Appointment</Button>
        </Actions>
        <Scheduler 
          columns={columns} 
          events={activeEvents} 
          style={{marginTop: 16}}
        />
      </Wrapper>
    </MainLayout>
  )
}

export default AppointmentsPage;