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
      res.redirect('/existing-claim/sign-in')
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

  router.post('/are-there-any-dates-answer', function (req, res) {

  var answer = req.session.data['availability']

  if (answer == "yes"){
    res.redirect('/research-220217/postpone/5-dates')
  }  if (answer == "no"){
      res.redirect('/research-220217/postpone/6-check-your-answers')
    }

  })

router.post('/representing-yourself', function (req,res) {

var representation = req.session.data['yourself-or-someone']

if (representation == "yourself"){
  res.redirect('/ET1/single-multiple')
} if (representation == "someone" ){
  res.redirect('employmenttribunals.service.gov.uk/apply')
}

})

router.post('/single-or-multiple-answer', function (req,res) {

var answer = req.session.data['single-or-multiple']

if (answer == "single"){
  res.redirect('/ET1/Acas')
} if (answer == "multiple" ){
  res.redirect('employmenttribunals.service.gov.uk/apply')
}

})


router.post('/acas-certificate-answer', function (req,res) {

var answer = req.session.data['acas-certificate']

if (answer == "yes"){
  res.redirect('/ET1/claim-type')
} if (answer == "no" ){
  res.redirect('/ET1/acas-valid-reason')
}

})

router.post('/Acas-valid-reason-answer', function (req,res) {

var answer = req.session.data['acas-reason']

if (answer == "yes"){
  res.redirect('/ET1/claim-type')
} if (answer == "no" ){
  res.redirect('/ET1/contact-acas')
}

})

// router.post('/claim-type-answer', function (req,res) {
//
// var answer = req.session.data['claim-type']
//
// if (answer == "discrimination"){
//   res.redirect('/ET1/claim-type-discrimination')
// } if (answer == "pay" ){
//   res.redirect('/ET1/claim-type-pay')
// } else {
//   res.redirect('legacy service')
// }
//
// })

router.post('/claim-type-answer', function (req,res) {

  var answer = req.session.data['claim-type']

  if (answer.includes("discrimination")){
    res.redirect('ET1/create-account')
  }  if (answer.includes("whistleblowing")){
    res.redirect('ET1/create-account')
  } else {
    res.redirect('legacy-service')
  }
})

router.post('/discrimination-routing-answer', function (req,res) {

  var answer = req.session.data['claim-type']

  if (answer.includes("pay")) {
    res.redirect('/ET1/claim-type-pay')
  } else {
    res.redirect('/ET1/create-account')
  }
})


router.post('/did-you-work-routing', function (req,res) {

var answer = req.session.data['did-you-work']

if (answer == "yes"){
  res.redirect('ET1/employment/are-you-still-working')
} else if (answer == "no" ){
  res.redirect('/ET1/task-list')

}

})

router.post('/still-working-answer', function (req,res) {

var answer = req.session.data['are-you-working']

if (answer == "I’m still working for the respondent"){
  res.redirect('ET1/employment/still-working/job-title')
} if (answer == "I’m working a notice period for the respondent" ){
  res.redirect('ET1/employment/working-notice/job-title')
} if (answer == "I’m no longer working for the respondent" ){
    res.redirect('ET1/employment/not-working/job-title')
}

})

router.post('/working-notice-period-answer', function (req,res) {

var answer = req.session.data['notice-period']

if (answer == "yes"){
  res.redirect('ET1/employment/still-working/notice-type')
} else if (answer == "no" ){
  res.redirect('/ET1/employment/still-working/average-weekly-hours')

}

})

router.post('/not-working-notice-period-answer', function (req,res) {

var answer = req.session.data['notice-period']

if (answer == "yes"){
  res.redirect('ET1/employment/not-working/notice-type')
} else if (answer == "no" ){
  res.redirect('/ET1/employment/not-working/average-weekly-hours')

}

})

router.post('/not-working-new-job-answer', function (req,res) {

var answer = req.session.data['new-job']

if (answer == "yes"){
  res.redirect('ET1/employment/not-working/new-job-start')
} else if (answer == "no" ){
  res.redirect('/ET1/task-list')

}

})


router.post('/did-you-work-respondent-address-answer', function (req,res) {

var answer = req.session.data['did-you-work-respondent-address']

if (answer == "yes"){
  res.redirect('ET1/respondents/respondent-1-acas')
} else if (answer == "no" ){
  res.redirect('ET1/respondents/where-did-you-work')

}

})

router.post('/respondent-acas-certificate-answer', function (req,res) {

var answer = req.session.data['respondent-acas-number']

if (answer == "Yes"){
  res.redirect('ET1/respondents/check-details')
} else if (answer == "No" ){
  res.redirect('ET1/respondents/acas-number-reason')

}

})

router.post('/what-you-want-answer', function (req,res) {

  var answer = req.session.data['what-you-want']

  if (answer.includes("Compensation") && answer.includes("A tribunal recommendation")) {
    res.redirect('ET1/compensation')
  } if (answer.includes("Compensation")){
    res.redirect('ET1/compensation')
  }  if (answer.includes("A tribunal recommendation")){
    res.redirect('ET1/recommendation')
  } else {
    res.redirect('other')
  }
})

router.post('/compensation-answer', function (req,res) {

  var answer = req.session.data['what-you-want']

  if (answer.includes("A tribunal recommendation")) {
    res.redirect('ET1/recommendation')
  } else {
    res.redirect('ET1/task-list')
  }
})


router.post('/trusted-helper-answer', function (req, res) {

  var answer = req.session.data['trusted helper']

  if (answer = "Yes"){
    res.redirect('ET1/trusted-help-yes')
  } else {
    res.redireect('index')
  }
})


module.exports = router
