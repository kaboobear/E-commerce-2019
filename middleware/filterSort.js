const filterSort = (model) => async (req,res,next) => {
    const category= parseInt(req.query.category);
    const from= parseInt(req.query.from);
    const to= parseInt(req.query.to);
    const ship= parseInt(req.query.ship);

    results.results = await model.find().limit(limit).skip(startIndex);

    req.results = results;
    next();
}

module.exports = filterSort;