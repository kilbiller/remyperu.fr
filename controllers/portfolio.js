module.exports = {
  index: function(req, res, next) {
    res.render('portfolio');
  },

  opentaxepub: function(req, res, next) {
    res.render('portfolio_opentaxepub');
  }
};
