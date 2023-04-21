import React, { useState } from 'react';

import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { gql } from '../__generated__/gql';

import Task from '../components/Tasks/Task';
import Button from '../components/general/Button';
import TaskForm from '../components/Tasks/TaskForm';

import { Task as TaskType } from '../helpers/types';

const GET_TASKS: any = gql(`
    query getTasks {
        getTasks {
            title
            id
            entryDate
            finishDate
            instructions
            products {
                amount
                product {
                    title
                    width
                    model
                    length
                    inStock
                    inDelivery
                    imagePath
                    id
                    height
                    color
                }
            }
        }
    }
`)

const Tasks = () => {
    const { loading, data } = useQuery(GET_TASKS);
    const [ isVisible, setVisibility ] = useState<boolean | undefined>(false);

    let tasks: TaskType[] = [];

    if(!loading) tasks = [ ...data.getTasks ];

    return (
        <StyledSection>
            <Outlet />
            <StyledHeading>Zlecenia</StyledHeading>
            <Button label='Dodaj zlecenie' type='positive' onClick={() => setVisibility(true)} />
            <TaskForm isVisible={isVisible} />
            <StyledTaskList>
                {!loading ? tasks.map((taskData: TaskType) => <Task key={taskData.id} data={taskData} />) : null}
            </StyledTaskList>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledHeading = styled.h1`
    font-size: 3rem;
    margin-bottom: 0;
`;

const StyledTaskList = styled.ul`
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    max-width: 1200px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
    
export default Tasks;