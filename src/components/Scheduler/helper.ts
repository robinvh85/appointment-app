import moment from 'pages/FunctionPage/node_modules/moment';

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

  for (let i = 0; i < totalMinutes / lapTime; i++) {
    startTime.add(lapTime, 'minutes');
    result.push(startTime.format('HH:mm'));
  }

  return result;
}

export const buildPosition = (start: string, step: number, event: any) => {
  const startHours = parseInt(start.split(':')[0]);
  const startMins = parseInt(start.split(':')[1]);
  const date = moment(event.from);
  const startTime = date.startOf('day').hour(startHours).minutes(startMins);

  const startPosition = moment.duration(event.from.diff(startTime)).asMinutes() / step;
  const endPosition = moment.duration(event.to.diff(event.from)).asMinutes() / step;

  return {
    top: HEADER_HEIGHT + FIRST_CELL_HEIGHT + startPosition * CELL_HEIGHT,
    left: TIME_COLUMN_WIDTH + (event.column - 1) * COLUMN_WIDTH,
    height: endPosition * CELL_HEIGHT
  };
}