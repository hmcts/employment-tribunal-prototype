const express = require('express')
const router = express.Router()
const path = require('path')

// Add your routes here - above the module.exports line

  // Run this code when a form is submitted to 'account or number'
  router.post('/save-and-return-answer', function (req, res) {

    // Make a variable and give it the value from 'account or number'
    var numberAccount = req.session.data['number-or-account']

    // Check whether the variable matches a condition
    if (numberAccount == "number"){
      // Send user to next page
      res.redirect('/number')
    } else {
      // Send user to ineligible page
      res.redirect('/account')
    }

  })

module.exports = router
