import React from 'react';

import styled from 'styled-components';

import { Task as TaskType } from '../../helpers/types';
import { convertToDate } from '../../helpers/helpers';

const Task = ({ data: { title, entryDate, finishDate, id, products, instructions } } : { data: TaskType }) => {
    return <StyledTask>
                <StyledHeading>{title}</StyledHeading>
                <p>ID: {id}</p>
                <p>Od: {convertToDate(entryDate)}</p>
                <p>Do: {convertToDate(finishDate)}</p>
                <p>Instrukcje: {instructions}</p>
                <p>Produkty:</p>
                <ul>
                    {products.map(({ amount, product: { color, title, id: productID, model } }) => {
                        return <li key={productID}>{title} - {model} {color}, {amount}</li>
                    })}
                </ul>
            </StyledTask>
}

const StyledTask = styled.li`
    background-color: #5C5AE0;
    color: #fff;
    padding: .5rem 1rem;
    border-radius: 5px;
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, .255);

    & p, ul { 
        margin: .5rem 0;
    }

    & p:first-of-type {
        font-size: .75rem;
    }
`;

const StyledHeading = styled.h2`
    font-size: 2rem;
    margin: 1rem 0;
`;

export default Task;