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
    return (
        <GlobalContext.Provider value={{

            addIncome,
            getIncome,
            incomes

        }}>
            {children}
        </GlobalContext.Provider>

    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}