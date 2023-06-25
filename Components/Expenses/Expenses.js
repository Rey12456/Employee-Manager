import react from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layout';

// create dashbiard component
const Expenses = () => {
    return (
        <ExpensesStyled>
            <InnerLayout>
               <h1>Expenses</h1> 

            </InnerLayout>


        </ExpensesStyled>
    )
}

const ExpensesStyled = styled.div`

`;

export default Expenses;