import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from './styles';

type Props = {
  onClick?: () => void;
}

const EditIcon: React.FC<Props> = ({onClick}) => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faPencilAlt} onClick={onClick} />
    </Wrapper>
  )
}

export default EditIcon;
