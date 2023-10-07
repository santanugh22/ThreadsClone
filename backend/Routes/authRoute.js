import { Router } from "express";
import pool from "../Database/Conn.js";
const router=Router()


// this is the esgister page of the user 
router.post('/register',async (req,res)=>{
  

    try {
          const { username, email, password } = req.body;

          const newuser = await pool.query(
            "INSERT INTO users (username,email,password) VALUES($1,$2,$3) RETURNING *",
            [username, email ? email : null, password]
          );

          res.status(200).json(await newuser.rows[0])
        
    } catch (error) {
        console.log(error)
        
    }

    

})

// this is the login router of the user
router.post('/login',async(req,res)=>{
    try {
        const {username,password}=req.body
        const user=await pool.query('SELECT * FROM users WHERE username=$1 AND PASSWORD=$2',[username,password])

        if(!user.rows.length){
            res.status(403).json("User Doesnt Exist")
            
        }

        res.status(200).json(user.rows[0])
        
    } catch (error) {
        console.log(error)
        
    }
})


export default router