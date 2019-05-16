const News = require ("../models/news_model")
exports.addNews = (req, res, next) => {
    res.render("add_news",
        { pageTitle: "add-news" }
    )
}

exports.postAddnews = (req,res, next) => {
    // console.log(req.body.title, req.body.content);
    //         res.redirect("/");

    const {title,content}= req.body
    News.create({
        title,
        content
    })  
    .then(() => {
            res.redirect("/");
    })
    .catch(err => next(err));
}

exports.getNewsById = (req, res, next) => {
    const newsId = req.params.id;
    News.findByPk(newsId)
        .then(( result) => {
            res.render("detailNews", {news:result});
        })
        .catch(err => next(err));
}

