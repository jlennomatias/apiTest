import { Router } from 'express';
import { getAllUsers, getUserId, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = Router();

// Rota para obter todos os usuários
router.get('/users', getAllUsers);

// Rota para obter um usuário por ID
router.get('/users/:id', getUserId);

// Rota para criar um novo usuário
router.post('/users', createUser);

// Rota para atualizar um usuário por ID
router.put('/users/:id', updateUser);

// Rota para remover um usuário por ID
router.delete('/users/:id', deleteUser);

export default router;
