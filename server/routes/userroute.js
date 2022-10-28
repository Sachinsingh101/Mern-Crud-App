import express from "express";
import {postfunction , getfunction , Editfunction ,Getsingleuser, Deleteuser} from "../controllers/usercontroller.js";
const router=express.Router();

router.all('/add',postfunction);
router.get('/getallusers',getfunction);
router.put('/Edit/:id',Editfunction);
router.get('/getsingleuser/:id',Getsingleuser);
router.delete('/deleteuser/:id',Deleteuser);

export default router;

