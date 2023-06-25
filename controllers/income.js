const IncomeSchema = require('../models/incomemodel')

exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body

    const income=IncomeSchema({

        title,
        amount,
        category,
        description,
        date
    })

    try{
        if(!title || !category || !description || !date){
            return res.status(400).json({msg: "Please fill all the fields"})
        }
        if( amount<=0 || !amount==='number'){
            return res.status(400).json({msg: "Number must be greater than 0"})
        }
        await income.save()
        res.status(200).json({msg: "Fields added successfully"})
    }catch(error){
        res.status(500).json({msg: "Internal server error"})
    }

    console.log(income)
    
}

exports.getIncomes = async (req, res) => {

    try{
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    }
        catch(error){
            res.status(500).json({msg: "Internal server error"})
        }

    }

exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    
    IncomeSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({msg: "Income deleted successfully"})

        })
        .catch((error)=>{
            res.status(500).json({msg: "Internal server error"})
        })
   
}

