require('dotenv').config()
const express=require('express');
const app=express();
const mongoose=require('mongoose')
const db=require('./db')
const bcrypt=require('bcryptjs')
const user=require('./models/user');
const jwt=require('jsonwebtoken')
const userRouter = require('./routes/auth-routes');
const planRouter = require('./routes/plan.route');
app.use(express.json())

//connexion à la bse de données
mongoose.connect(db.URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log('Connecté à MongoDB'))
.catch(err=>console.log('Erreur de connexion à MongoDb',err))

//Spécification des routes
// app.get('/register',(req,res)=>{
//     res.send('PAGE D\'INSCRIPTION')
// })
// app.post('/register',async (req,res)=>{
//     const {username,email,password}=req.body;

//     try{
//         //utilisateur existe
//         const UserExist=await user.findOne({username});
//         if (UserExist) {
//             return res.status(400).json({message:'Cet utilisateur existe déjà!!!'});
//         }
//         //enregistremeny d'un utilisateur
//         const hashedPassword=await bcrypt.hash(password,10)
//         const newUser=new user({username,email,password:hashedPassword})
//         await newUser.save()
//         res.status(201).json({message:'Utilisateur enregistré avec succès'})
//     }catch(error){
//         res.status(500).json({message:'Erreur durant l\'enregistrement'})
//     }
// })

// app.get('/login',(req,res)=>{
//     res.send('PAGE DE CONNEXION')
// })
// app.post('/login',async (req,res)=>{
//     const {email,password}=req.body;
//     try{
//         //verification si l'utilisateur existe
//         const check=await user.findOne({email:email});
//         if (check.email){
//             const result= await bcrypt.compare(password,check.password)
//             if (result) {
//                 const accessToken=jwt.sign(check.email, process.env.ACCESS_TOKEN_SECRET);
//                return res.status(201).json({message:'Connexion Reussie',accessToken:accessToken});
//             } else {
//                 return res.status(201).json({message:'Mot de passe incorrect'});
//             }
//         }else{
//             return res.status(401).json({message:'Cet utilisateur n\'existe pas'});
//         }
        

//     }catch(error){
//         console.log(error);
//         res.status(500).json({message:'Erreur durant la connexion'})
//     }
// })

// //route par défaut
// app.get('/',(req,res)=>{
//     res.send('API d\'authnetification')
// });

app.use('/user', userRouter);

app.use('/plan', planRouter);

//démarrage du serveur sur le port 8080
app.listen(8080,()=>{
    console.log('serveur lancé sur le port 8080');
});