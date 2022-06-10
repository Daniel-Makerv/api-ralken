import express from 'express';
import * as userServices from '../services/userServices'

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(userServices.getUsers())
})

export default router;