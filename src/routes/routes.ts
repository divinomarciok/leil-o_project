import {Router} from 'express';
import {validateUser} from '../middleware/validateUser';
import {createUser} from '../controllers/createUser';
import {authenticateUser} from '../controllers/authenticateUser';
import {authenticateToken} from '../middleware/authenticateToken'
import {createEnterprise} from '../controllers/createEnterprise';
import { createProduct } from '../controllers/createProduct';
import { validateProduct } from '../middleware/validateProduct';
import {validateEnterpriseProduct} from '../middleware/validateEnterpriseProduct'
import {addEnterpriseProduct} from '../controllers/addEnterpriseProdudct'
import { getAllProducts } from '../controllers/getAllProducts';

const router = Router();

router.post('/createuser',validateUser, createUser);

router.post('/login', authenticateUser);

router.post('/createenterprise', authenticateToken, createEnterprise);

router.post('/createproduct', authenticateToken,validateProduct,createProduct);

router.post('/addenterpriseproduct', authenticateToken, validateEnterpriseProduct, addEnterpriseProduct);

router.get('/getAllProducts', authenticateToken, getAllProducts);


export default router;
