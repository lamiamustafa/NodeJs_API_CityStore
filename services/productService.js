var response = {
    success: false,
    results: {},
    messages: []
}
function productService(Product){

    function post(req, res) {
        var product = new Product(req.body);
        product.save();
        response.success = true;
        return res.json(response);
    };

    function get(req, res){
        const query = {}
        if(req.query.cateogryID){
            query.cateogryID = req.query.cateogryID;
        }

        Product.find(query, (err, products) => {
            if(err){
                response.success = false;
                response.messages.push(err);
                return res.json(response);
            }
            response.success = true;
            response.results = products;
            return res.json(response);
        });
    }

    function getByIdMiddleware(req, res, next){
        
        Product.findById(req.params.productId, (err, product) => {
            if(err){
              return res.send(err);
            }
            if(product){
                req.product = product;
                return next();
            }
            res.sendStatus(404);
          });
    };

    function getById(req, res){
        
        response.success = true;
        response.results = req.product;
        res.json(response);
    }

    function modifyById(req, res){
        var { product } = req;
        product.name = req.body.name;
        product.price = req.body.price;
        product.quantity = req.body.quantity;
        product.ImgURL = req.body.ImgURL;
        product.cateogryID = req.body.cateogryID;
        product.save((err) =>{
            if(err){
                                
                response.success = false;
                response.messages.push(err);
                return res.json(response);
            }
            
            response.success = true;
            response.results = req.product;
            return res.json(response);
        });
    }

    return {get, post, getByIdMiddleware, getById, modifyById};
}

module.exports = productService;