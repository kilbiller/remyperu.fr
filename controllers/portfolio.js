module.exports = {
  index: function(req, res, next) {
    res.render("portfolio");
  },

  opentaxepub: function(req, res, next) {
    var project = {
      name: "OpenTaxePub",
      date: "Avril 2012 - Juin 2012",
      images: ["http://placehold.it/350x350", "http://placehold.it/350x350"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper arcu lectus, sit amet vulputate tortor vestibulum et. Nunc auctor semper consequat. Ut placerat sagittis erat, at commodo nisi molestie vitae. Fusce at diam non ligula mollis condimentum in eget enim. Nam at mattis ante. Donec non sem sagittis, consequat est ut, finibus turpis. Nulla dapibus lacus quis felis congue, id hendrerit ipsum sagittis. Nullam consectetur leo felis, feugiat consequat arcu mattis eu. Pellentesque commodo justo vel neque aliquet, a faucibus lacus egestas.",
      technologies: ["PHP", "Javascript", "etc.."],
      href: "http://www.openmairie.org/catalogue/opentaxepub/opentaxepub-gestion-des-taxes-sur-la-publicite"
    };
    res.render("portfolio_project", {
      project: project
    });
  },

  symfonyblog: function(req, res, next) {
    var project = {
      name: "Blog Symfony",
      date: "2014",
      images: ["http://placehold.it/350x350", "http://placehold.it/350x350"],
      description: "Once Upon a Blog est un projet de master visant a développer un blog en PHP en utilisant le Framework Symfony 2",
      technologies: ["PHP", "Symfony 2", "etc..."],
      href: null
    };
    res.render("portfolio_project", {
      project: project
    });
  },

  thesaurus: function(req, res, next) {
    var project = {
      name: "Thesaurus",
      date: "2014",
      images: ["http://placehold.it/350x350", "http://placehold.it/350x350"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper arcu lectus, sit amet vulputate tortor vestibulum et.",
      technologies: ["PHP", "Javascript", "SQL", "Oracle", "etc..."],
      href: null
    };
    res.render("portfolio_project", {
      project: project
    });
  },

  diagarchi: function(req, res, next) {
    var project = {
      name: "DiagArchi",
      date: "Avril 2014 - Juin 2014",
      images: ["http://placehold.it/350x350", "http://placehold.it/350x350"],
      description: "Le diagnostic architectural nomade est ...",
      technologies: ["HTML", "Javascript", "Angular", "Cordova"],
      href: null
    };
    res.render("portfolio_project", {
      project: project
    });
  }
};
