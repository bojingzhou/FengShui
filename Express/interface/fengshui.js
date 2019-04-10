var express = require('express');
var async = require('async');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://122.152.218.9:27017/";


/* GET home page. */
// router.all('/fs', function (req, res, next) {
//     MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
//         if (err) throw err;
//         console.log("数据库已创建!");
//         db.close();
//         console.log(req.body.username);
//     });
//
// });

router.post('/login', function (req, res, next)
{
    let username = req.body.username;
    let password = req.body.password;
    let status = 500;
    let data = "";
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db)
    {
        if (err)
        {
            let obj = {"status": status, "data": data}
            res.send(obj)
            throw err;
        }
        var dbo = db.db("ZJB");
        dbo.collection("user").find({username: username, password: password}).toArray(function (err, result)
        { // 返回集合中所有数据
            if (err)
            {
                let obj = {"status": status, "data": data}
                res.send(obj)
                throw err;
            }
            db.close();
            status = 200;
            if (result.length > 0)
            {
                data = result[0]
                let obj = {"status": status, "data": data}
                res.send(obj)
            }
            else
            {
                let obj = {"status": status, "data": "用户名或密码错误"}
                res.send(obj)
            }

        });
    });
})

router.post('/add', function (req, res, next)
{
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    let status = 500;
    let data = "";
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db)
    {
        if (err)
        {
            let obj = {"status": status, "data": data}
            res.send(obj)
            throw err;
        }
        var dbo = db.db("ZJB");
        dbo.collection("user").insertOne({
            username: username,
            password: password,
            email: email,
            level: 1
        }, function (err, result)
        {
            if (err)
            {
                let obj = {"status": status, "data": data}
                res.send(obj)
                throw err;
            }
            db.close();

            if (result.insertedCount > 0)
            {
                status = 200;
                let obj = {"status": status, "data": "插入成功"}
                res.send(obj)
            }
            else
            {
                let obj = {"status": status, "data": "插入失败"}
                res.send(obj)
            }
        })
    });
})

router.post('/forget', function (req, res, next)
{
    let email = req.body.email;
    let status = 500;
    let data = "";
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db)
    {
        if (err)
        {
            let obj = {"status": status, "data": data}
            res.send(obj)
            throw err;
        }
        var dbo = db.db("ZJB");
        dbo.collection("user").find({email: email}).toArray(function (err, result)
        { // 返回集合中所有数据
            if (err)
            {
                let obj = {"status": status, "data": data}
                res.send(obj)
                throw err;
            }
            db.close();
            status = 200;
            if (result.length > 0)
            {
                data = result[0]
                let obj = {"status": status, "data": data}
                res.send(obj)
            }
            else
            {
                let obj = {"status": status, "data": "邮箱错误"}
                res.send(obj)
            }

        });
    });
})

router.post('/addPromise', function (req, res, next)
{
    let num = req.body.num;
    let title = req.body.title;
    let con = req.body.con;
    let status = 500;
    let data = "";
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db)
    {
        if (err)
        {
            let obj = {"status": status, "data": data}
            res.send(obj)
            throw err;
        }
        var dbo = db.db("ZJB");
        dbo.collection("promise").insertOne({
            num: num,
            title: title,
            con: con,
            zan: "0"
        }, function (err, result)
        {
            if (err)
            {
                let obj = {"status": status, "data": data}
                res.send(obj)
                throw err;
            }
            db.close();

            if (result.insertedCount > 0)
            {
                status = 200;
                let obj = {"status": status, "data": "插入成功"}
                res.send(obj)
            }
            else
            {
                let obj = {"status": status, "data": "插入失败"}
                res.send(obj)
            }
        })
    });
})

router.post('/promiseList', function (req, res, next)
{
    let type = req.body.type;
    let num = parseInt(req.body.num);
    let status = 500;
    let data = "";
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db)
    {
        if (err)
        {
            let obj = {"status": status, "data": data}
            res.send(obj)
            throw err;
        }
        var dbo = db.db("ZJB");
        let data = {}
        let sort = {}
        let skip = 0
        let limit = 10
        if (type == "normal")
        {
            skip = num * limit
        }
        else if (type == "new")
        {

        }
        else if (type == "love")
        {
            sort = {zan: -1}
        }
        dbo.collection("promise").find(data).skip(skip).limit(limit).sort(sort).toArray(function (err, result)
        { // 返回集合中所有数据
            if (err)
            {
                let obj = {"status": status, "data": data}
                res.send(obj)
                throw err;
            }
            db.close();
            status = 200;
            console.log(result)
            if (result.length >= 0)
            {
                for (let i = 0; i < result.length; i++)
                {
                    result[i].img = "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90"
                }
                data = result

                let obj = {"status": status, "data": data}
                res.send(obj)
            }
            else
            {
                let obj = {"status": status, "data": "查询错误"}
                res.send(obj)
            }

        });
    });
})


module.exports = router;
