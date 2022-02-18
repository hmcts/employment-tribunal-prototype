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

  router.post('/what-do-you-want-answer', function (req, res) {

  var answer = req.session.data['what-do-you-want']

  if (answer == "provide-information"){
    res.redirect('/research-220217/order/2-provide-information')
  }  if (answer == "provide-documents"){
      res.redirect('/research-220217/order/2-provide-documents')
    } if (answer == "comply"){
        res.redirect('/research-220217/order/2-comply')
      } if (answer == "something-else"){
          res.redirect('/research-220217/order/2-something-else')
        }

  })

module.exports = router
