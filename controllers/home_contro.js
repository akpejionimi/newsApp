const News = require ("../models/news_model");
exports.home = (req, res, next) => {
    News.findAll()
    .then((result) =>{
        res.render("home",
            { pageTitle: "home",
            allNews: result
        });
    })
}

