module.exports.brandControllers = {

    get_brands: function(req, res){
        res.json("Бренды")
    },
    add_brand: function(req, res){
        res.json("бренд добавлен")
    },

    delete_brand: function(req, res){
        res.json("Бренд удален")
    },
    
}