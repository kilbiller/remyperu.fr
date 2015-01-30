module.exports = {
  index: function(req, res, next) {
    res.render('portfolio');
  },

  opentaxepub: function(req, res, next) {
    res.render('projects/opentaxepub');
  },

  symfonyblog: function(req, res, next) {
    res.render('projects/symfonyblog');
  },

  thesaurus: function(req, res, next) {
    res.render('projects/thesaurus');
  },

  diagarchi: function(req, res, next) {
    res.render('projects/diagarchi');
  }
};
