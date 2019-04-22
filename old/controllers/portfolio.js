var projects = require('./projects.json');

module.exports = {
	index: function(req, res, next) {
		res.render('portfolio', {
			projects: projects,
		});
	},

	project: function(req, res, next) {
		for (var i = 0; i < projects.length; i++) {
			if (projects[i].name && projects[i].name === req.params.project) {
				return res.render('portfolio_project', {
					project: projects[i],
				});
			}
		}
		return next();
	},
};
