const restfull = require('node-restful')
const mongoose = restfull.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String , required: false },
    value: { type: Number,  min:0, required: false }
}) 

const debtSchema = new mongoose.Schema({
    name: { type: String , required: false },
    value: { type: Number,  min:0, required: [false, 'Informe o valor do débito'] },
    status: { type:String, required: false, uppercase: false, enum:['PAGO','PENDENTE','AGENDADO'] }
}) 

const billingCycleSchema = new mongoose.Schema({
    name: { type: String , required: true },
    month: { type:Number,  min:1 , max:12,  required:[true, 'O Mês é obrigatório'] },
    year: { type:Number, min:1970, max:2100, required:[true, 'O Ano é obrigatório'] },
    credits: [creditSchema],
    debts: [debtSchema], 
})

module.exports = restfull.model('BillingCycle',billingCycleSchema)