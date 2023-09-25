import express from 'express';
import { addSaldo, deleteSaldoWithTransactions, getAllSaldo } from '../controllers/saldo.controller.js';

const router = express.Router();

router.post('/add', addSaldo);
router.get('/', getAllSaldo);
router.delete('/delete/:id', deleteSaldoWithTransactions);

export default router;