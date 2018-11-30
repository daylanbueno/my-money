const express  = require('express')


module.exports  = function(server) {
    
    // Definir url base para todas as rotas

    const router  = express.Router()
    server.use('/api', router)

    // Define url rotas do ciclo de pagamentos
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}