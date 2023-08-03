import React, { useContext, useState } from "react"
import axios from 'axios'
const BASE_URL="http://localhost:3000/api/v1/";


const GlobalContext = React.createContext();


export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes
    const addIncome = async (income) => {
        console.log('addIncome function called');
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
       
    }

    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data);
    }


        
        const deleteIncome = async (id) => {
            const response = await axios.delete(`${BASE_URL}delete-income/${id}`)
            const updatedIncomes = incomes.filter((income) => income._id !== id);
            setIncomes(updatedIncomes);
           
        }

        const totalIncome = () => {
            let totalIncome = 0;
           incomes.forEach((income) => {
                totalIncome += income.amount;
            })
            return totalIncome;
        }
        console.log(totalIncome());


        const addExpense = async (income) => {
            console.log('addExpense function called');
            const response = await axios.post(`${BASE_URL}add-expense`, income)
                .catch((err) =>{
                    setError(err.response.data.message)
                })
                getExpense()
           
        }

        const getExpense = async () => {
            const response = await axios.get(`${BASE_URL}get-expenses`)
            setExpenses(response.data)
            console.log(response.data);
        }

        const deleteExpense = async (id) => {
            const response = await axios.delete(`${BASE_URL}delete-expense/${id}`)
            const updatedExpenses = expenses.filter((expense) => expense._id !== id);
            setExpenses(updatedExpenses);
           
        }

        const totalExpenses = () => {
            let totalIncome = 0;
            expenses.forEach((income) =>{
                totalIncome = totalIncome + income.amount
            })
    
            return totalIncome;
        }
    
    return (
        <GlobalContext.Provider value={{

            addIncome,
            getIncome,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpense,
            expenses,
            deleteExpense,
            totalExpenses,


        }}>
            {children}
        </GlobalContext.Provider>

    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}