import {Router} from 'express';
import {validateUser} from '../middleware/validateUser';
import {createUser} from '../controllers/createUser';
import {authenticateUser} from '../controllers/authenticateUser';
import {authenticateToken} from '../middleware/authenticateToken'

const router = Router();

router.post('/createuser',validateUser, createUser);

router.post('/login', authenticateUser);

router.get('/protected', authenticateToken, (req, res) => {
    const tokenData = req.body.tokenData; // Dados do token
    res.status(200).json({ message: 'Acesso concedido', user: tokenData });
});


export default router;
