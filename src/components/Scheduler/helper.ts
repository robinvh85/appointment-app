import moment from 'moment';

export const HEADER_HEIGHT = 30;
export const FIRST_CELL_HEIGHT = 10;
export const TIME_COLUMN_WIDTH = 50;
export const COLUMN_WIDTH = 180;
export const EVENT_WIDTH = 170;
export const CELL_HEIGHT = 50;

export const buildTimeList = (start: string, end: string, lapTime: number) => {
  const startHours = parseInt(start.split(':')[0]);
  const startMins = parseInt(start.split(':')[1]);
  const startTime = moment().startOf('day').hour(startHours).minutes(startMins);

  const endHours = parseInt(end.split(':')[0]);
  const endMins = parseInt(end.split(':')[1]);
  const endTime = moment().startOf('day').hour(endHours).minutes(endMins);

  var duration = moment.duration(endTime.diff(startTime));
  var totalMinutes = duration.asMinutes();
  const result = [startTime.format('HH:mm')];

  for(let i = 0; i < totalMinutes / lapTime; i++ ) {
    startTime.add(lapTime, 'minutes');
    result.push(startTime.format('HH:mm'));
  }

  return result;
}

export const buildPosition = (start: string, end: string, step: number, event: any) => {  
  const startHours = parseInt(start.split(':')[0]);
  const startMins = parseInt(start.split(':')[1]);
  const startTime = moment().startOf('day').hour(startHours).minutes(startMins);

  const eventFromHours = parseInt(event.from.split(':')[0]);
  const eventFromMins = parseInt(event.from.split(':')[1]);
  const eventFromTime = moment().startOf('day').hour(eventFromHours).minutes(eventFromMins);

  const eventToHours = parseInt(event.to.split(':')[0]);
  const eventToMins = parseInt(event.to.split(':')[1]);
  const eventToTime = moment().startOf('day').hour(eventToHours).minutes(eventToMins);

  const startPosition = moment.duration(eventFromTime.diff(startTime)).asMinutes() / step;
  const endPosition = moment.duration(eventToTime.diff(eventFromTime)).asMinutes() / step;

  return {
    top: HEADER_HEIGHT + FIRST_CELL_HEIGHT + startPosition * CELL_HEIGHT,
    left: TIME_COLUMN_WIDTH + (event.column - 1) * COLUMN_WIDTH,
    height: endPosition * CELL_HEIGHT
  };
}