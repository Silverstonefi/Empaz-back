import { Router } from 'express';
const router = Router();

import {
  allUsers,
  editUser,
  deleteUser,
  withdrawals,
  approveWithdrawal,
  declineWithdrawal,
  withdraw,
  deposits,
  deposit,
  approveDeposit,
  declineDeposit,
  editAdminBtc,
} from '../controllers/adminController.js';

// const { requireA } = require('../middleware/AdminMiddleware');
// import requireAuth from '../middleware/authMiddleware.js';

// router.use(requireAuth);

router.get('/users', allUsers);

router.get('/withdrawals', withdrawals);
router.post('/withdraw', withdraw);
router.post('/withdraw/approve', approveWithdrawal);
router.post('/withdraw/decline', declineWithdrawal);

router.get('/deposits', deposits);
router.post('/deposit', deposit);
router.post('/deposit/approve', approveDeposit);
router.post('/deposit/decline', declineDeposit);

router.put('/users/:id', editUser);

// router.delete('/users/:id', del);

router.post('/deleteuser', deleteUser);
router.put("/btc", editAdminBtc);


export default router;
