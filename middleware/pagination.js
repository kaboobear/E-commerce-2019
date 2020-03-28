const pagination = (model) => async(req, res, next) => {
    //Results object
    const results = {
        results: {},
        pagination: {},
        filters: [],
    }



    //Filter
    const category = parseInt(req.query.category);
    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);
    const ship = parseInt(req.query.ship);

    results.filters.push(category);
    results.filters.push(from);
    results.filters.push(to);
    results.filters.push(ship);

    const match = {}

    if (category !== 0 && category !== 1)
        match.category = category;
    if (ship !== 0) 
        match.isFreeShipping = (ship === 1)
            ? true
            : false;
    match.price = {$gt:from,$lt:to}




    //Sort
    const sortVal = parseInt(req.query.sort);
    results.sort = sortVal;
    
    let sort = {}

    if(sortVal === 1) sort = {price:1}
    if(sortVal === 2) sort = {price:-1}
    if(sortVal === 3) sort = {createdAt:1}
    if(sortVal === 4) sort = {createdAt:-1}










    //Search
    const regex = req.query.regex

    results.regex = regex;

    match.title = new RegExp(regex,"i");







    //Pagination
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = (page) * limit;
    const itemsCount = await model
        .find(match)
        .countDocuments()
        .sort(sort)
        .exec();

    results.pagination.currentPage = page;
    results.pagination.limit = limit;
    results.pagination.pagesCount = Math.ceil(itemsCount / limit);

    if (endIndex < itemsCount) 
        results.pagination.next = {
            page: page + 1,
            limit: limit
        }
    if (startIndex > 0) 
        results.pagination.prev = {
            page: page - 1,
            limit: limit
        }
    






    //Query
    results.results = await model
        .find(match)
        .limit(limit)
        .sort(sort)
        .skip(startIndex);

    req.results = results;
    next();
}

module.exports = pagination