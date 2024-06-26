import express  from "express";
// Importe les fonctions de contrôleur pour récupérer tous les mangas et un manga par ID
import { getAllMangas, getMangaById, addNewManga, updateManga, deleteManga } from "../controllers/MangaController";
// Crée un routeur Express
const router = express.Router();

// Définit une route GET pour récupérer tous les mangas, avec le middleware d'authentification
router.get('/', getAllMangas)
// Définit une route GET pour récupérer un manga par ID, avec le middleware d'authentification
router.get('/:id', getMangaById)

router.post('/', addNewManga)

router.put('/:id', updateManga)

router.delete('/:id', deleteManga)

export default router