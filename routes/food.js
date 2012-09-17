/**
 * Created with JetBrains WebStorm.
 * User: marshal
 * Date: 12-9-16
 * Time: 下午1:29
 * To change this template use File | Settings | File Templates.
 */

exports.food = function(req, res){
    var method=req.method;
    switch (method){
        case 'POST':
            var food=req.body;
            food.id=1;
            res.send(food);
            break;
        case 'PUT':
            var foodId=req.params.id;
            console.log(foodId);
            break;
        case 'GET':
            var foodId=req.params.id;
            console.log(foodId);
            break;
        case 'DELETE':
            var foodId=req.params.id;
            console.log(foodId);
            break;
    }
};