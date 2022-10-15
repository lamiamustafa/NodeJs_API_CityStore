function categoryController(Category){

    function post(req, res) {
        var category = new Category(req.body);
        category.save();
        return res.json(category);
    };

    function get(req, res){
        
        Category.find((err, categories) => {
            if(err){
            return res.send(err);
            }
            return res.json(categories);
        });
    }
    return {get, post};
}

module.exports = categoryController;