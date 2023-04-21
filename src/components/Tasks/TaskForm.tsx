import React from 'react';

import styled from 'styled-components';

import Input from '../general/Input';
import Button from '../general/Button';

const TaskForm = ({ isVisible } : { isVisible?: boolean}) => {
    return isVisible ? (
        <StyledContainer>
            <Input placeholder='nazwa zlecenia' label='Zlecenie' htmlFor='zlecenie'/>
            <Input placeholder='instrukcje do zlecenia' label='Instrukcje' htmlFor='instrukcje' type='textarea'/>
            <Input placeholder='na kiedy' label='Data wysyłki' htmlFor='wysyłka'/>
            <Input placeholder='produkt'/>
            <Button label='dodaj' />
            <Button label='anuluj' type='negative' />
        </StyledContainer>
    ) : null;
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default TaskForm;