const constroller={}

constroller.list=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM USERS', (err,users)=>{
            if(err){
                res.json(err)
            }
            console.log(users)
            res.render('customer',{
                data: users
            })
        })
    })
}
constroller.save=(req, res)=>{
    console.log(req.body);
    res.send('wor5ks');
}

module.exports=constroller;