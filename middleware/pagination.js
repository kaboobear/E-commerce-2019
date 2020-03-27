const pagination = (model) => async (req,res,next) => {
    const page= parseInt(req.query.page);
    const limit= parseInt(req.query.limit);

    const startIndex = (page - 1)*limit;
    const endIndex = (page)*limit;
    const itemsCount = await model.countDocuments().exec();

    const results = {
        results:{},
        pag:{}
    }

    results.pag.currentPage = page;
    results.pag.limit = limit;
    results.pag.pagesCount = Math.ceil(itemsCount/limit);

    if(endIndex < itemsCount) results.next={page:page+1,limit:limit}
    if(startIndex > 0) results.prev={page:page-1,limit:limit}

    results.results = await model.find().limit(limit).skip(startIndex);

    req.results = results;
    next();
}

module.exports = pagination