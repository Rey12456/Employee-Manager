import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import { useEffect } from 'react';
import IncomeItem from '../IncomeItem/IncomeItem';



// create dashbiard component
const Incomes = () => {
const{addIncome, incomes, getIncome}=useGlobalContext()

useEffect(() => {
    getIncome()

},[])


    return (
        <IncomesStyled>

            <InnerLayout>
                <h1>Incomes</h1>

                <div className="income-content">

                <div className="form-container"> 
                <Form/>
                </div>

                <div className="incomes"> 
                {incomes.map((income) => {

                const {_id, title, amount, date, category, description, type} = income;
                return <IncomeItem

                key={_id}
                id={_id} 
                title={title} 
                description={description} 
                amount={amount} 
                date={date} 
                type={type}
                category={category} 
                indicatorColor="var(--color-green)"
                


                />

                })}
                
                </div>

                </div>

            </InnerLayout>    

         </IncomesStyled>
    )
}

const IncomesStyled = styled.div`
display: flex;
overflow: auto;


`;

export default Incomes;