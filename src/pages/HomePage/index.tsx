import React from 'react';

import MainLayout from 'components/layouts/MainLayout';
import Scheduler from 'components/Scheduler';
import { Wrapper } from './styles';

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
  { from: '08:00', to: '09:15', column: 1, content: 'Has appointment with A' },
  { from: '09:00', to: '12:00', column: 2, content: 'Has appointment with B' },
  { from: '10:00', to: '12:15', column: 3, content: 'Has appointment with C' }
];

const HomePage = () => {
  return (
    <MainLayout>
      <Wrapper>
        <Scheduler columns={columns} events={events} />
      </Wrapper>
    </MainLayout>
  )
}

export default HomePage;