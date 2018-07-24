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
    // Redirect to the relevant page
    res.redirect('/check-your-answers')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('upload-report')
  }
})

router.get('/confirmation-page', function(req, res, next) {
  res.locals.data['confirmed'] = "test";
  next();
});

module.exports = router
