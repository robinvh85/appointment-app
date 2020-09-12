import React from 'react';

import { 
  Event,
  Wrapper, 
  Column,
  TimeColumn,
} from './styles';
import { buildTimeList, buildPosition } from './helper';

type Props = {
  step?: number; // in minutes
  start?: any;
  end?: any;
  columns: Array<any>;
  events: Array<any>;
}

const Scheduler: React.FC<Props> = ({start='07:00', end='22:00', step=30, columns=[], events=[]}) => {
  const timeList = buildTimeList(start, end, step);

  return (
    <Wrapper>
      <TimeColumn>
        <div className="header"></div>
        <div className="first-cell"></div>
        {
          timeList.map((time, index) => (
            <div className='cell' key={index}>
              <div className='content'>{ time }</div>
            </div>
          ))
        }
      </TimeColumn>

      {
        columns.map((column, index) => (
          <Column key={index}>
            <div className="header">{ column.text }</div>
            <div className="first-cell"></div>
            {
              timeList.map((_, index) => (
                <div className='cell' key={index}>{}</div>
              ))
            }
          </Column>
        ))
      }
      {
        events.map((event, index) => (
          <Event style={ buildPosition(start, step, event) } key={index}>
            { `${event.from.format('HH:mm')} - ${event.to.format('HH:mm')}\n${event.content}` }
          </Event>  
        ))
      }
    </Wrapper>
  )
}

export default Scheduler;