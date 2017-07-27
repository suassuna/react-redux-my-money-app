const express = require('express')

module.exports = function(server) {

  // base URL
  const router = express.Router()
  server.use('/api', router)

  // billingCycle routes
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
}
