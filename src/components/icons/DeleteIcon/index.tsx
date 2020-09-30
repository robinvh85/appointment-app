import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from './styles';

type Props = {
  onClick?: () => void;
}

const DeleteIcon: React.FC<Props> = ({onClick}) => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faTrashAlt} onClick={onClick} />
    </Wrapper>
  )
}

export default DeleteIcon;
