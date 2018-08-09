const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line
router.post('/upload-report', function (req, res) {
  var doYouHaveAReport = req.body["do-you-have-a-report"];

  if (doYouHaveAReport === 'no') {
    res.redirect('/check-your-answers')
  } else {
    res.render('upload-report')
  }
})

router.post('/testing-type', function (req, res) {
  var supportType = req.body["support-type"];

  if (supportType === 'support-with-an-investigation') {
    res.redirect('/description-of-support')
  } else if (supportType === 'advice-on-legislation-or-regulation') {
    res.redirect('/description-of-advice-on-legislation-or-regulation')
  } else if (supportType === 'other') {
    res.redirect('/description-of-other-support')
  } else {
    res.render('testing-type')
  }
})

router.get('/confirmation-page', function(req, res, next) {
  res.locals.data['confirmed'] = "test";
  next();
});

module.exports = router
