const constroller={}

constroller.list=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM USERS', (err,users)=>{
            if(err){
                res.json(err)
            }
            console.log(users)
            res.render('customer')
        })
    })
}

module.exports=constroller;