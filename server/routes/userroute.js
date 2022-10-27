import express from "express";
import {postfunction} from "../controllers/usercontroller.js";
import {getfunction} from "../controllers/usercontroller.js"
import {Editfunction} from "../controllers/usercontroller.js"
import {Getsingleuser} from "../controllers/usercontroller.js"
const router=express.Router();

router.all('/add',postfunction);
router.get('/getallusers',getfunction);
router.put('/Edit/:id',Editfunction);
router.get('/getsingleuser/:id',Getsingleuser);

export default router;

