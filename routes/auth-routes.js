const express=require('express');
const bcrypt=require('bcryptjs')
const user=require('../models/user');
const jwt=require('jsonwebtoken')
const router=express.Router();

router.post('/register',async (req,res)=>{
    const {username,email,password}=req.body;

    try{
        //utilisateur existe
        const UserExist=await user.findOne({username});
        if (UserExist) {
            return res.status(400).json({message:'Cet utilisateur existe déjà!!!'});
        }
        //enregistremeny d'un utilisateur
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=new user({username,email,password:hashedPassword})
        await newUser.save()
        res.status(201).json({message:'Utilisateur enregistré avec succès'})
    }catch(error){
        res.status(500).json({message:'Erreur durant l\'enregistrement'})
    }
})

router.post('/login',async (req,res)=>{
    const {email,password}=req.body;

    try{
        //verification si l'utilisateur existe
        const UserExist=await user.findOne({email});
        if (!UserExist) {
            return res.status(401).json({message:'Cet utilisateur n\'existe pas'});
        }

        //Verification du mot de passe
        const validPassword=await bcrypt.compare(password,user.password)
        if (!validPassword) {
            return res.status(401).json({message:'mot de passe invalide'});
        }


        //génération d'un jeton d'authentification
        const token=jwt.sign({userId: user.id},config.jwtSecret)
        res.json({token})
    }catch(error){
        res.status(500).json({message:'Erreur durant la connexion'})
    }
})

module.exports=router;