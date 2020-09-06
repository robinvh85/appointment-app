import styled from '@emotion/styled';

import { 
  HEADER_HEIGHT, 
  FIRST_CELL_HEIGHT,
  TIME_COLUMN_WIDTH,
  COLUMN_WIDTH,
  EVENT_WIDTH,
  CELL_HEIGHT
} from './helper';

const borderColor = '#DDDDDD';

export const Wrapper = styled.div`
  border: 1px solid ${borderColor};
  margin-left: 50px;
  position: relative;
  display: flex;
  font-size: 14px;
`;

export const TimeColumn = styled.div`
  width: ${TIME_COLUMN_WIDTH + 'px'};

  .header {
    height: ${HEADER_HEIGHT + 'px'};
    box-sizing: border-box;
  }

  .first-cell {
    border-top: 1px solid ${borderColor};
    height: ${FIRST_CELL_HEIGHT + 'px'};
    box-sizing: border-box;
  }

  .cell {
    height: ${CELL_HEIGHT + 'px'};
    padding: 4px 8px;
    text-align: right;
    box-sizing: border-box;
    position: relative;

    .content {
      position: absolute;
      top: -9px;
      right: 4px;
    }
  }
`;

export const Column = styled.div`
  width: ${COLUMN_WIDTH + 'px'};
  font-size: 13px;

  .header {
    text-align: center;
    border-right: 1px solid ${borderColor};
    height: ${HEADER_HEIGHT + 'px'};
    line-height: ${HEADER_HEIGHT + 'px'};
    vertical-align: middle;
    box-sizing: border-box;
  }

  .first-cell {
    border-top: 1px solid ${borderColor};
    border-right: 1px solid ${borderColor};
    height: ${FIRST_CELL_HEIGHT + 'px'};
    box-sizing: border-box;
  }

  .cell {
    border-top: 1px solid ${borderColor};
    border-right: 1px solid ${borderColor};
    height: ${CELL_HEIGHT + 'px'};
    padding: 4px 8px;
    box-sizing: border-box;
  }
`;

export const Event = styled.div`
  position: absolute;
  background: green;
  width: ${EVENT_WIDTH + 'px'};
  box-sizing: border-box;
  padding: 4px 8px;
  color: #FFFFFF;
  box-sizing: border-box;
  white-space: pre-line;
`;