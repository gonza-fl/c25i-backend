import { Router } from 'express';

const router = Router();
router.get('/', (_req, res) => res.render('index', {title: 'Front desde el back'}));
router.get('/about', (_req, res) => res.render('about', {title: 'About me'}));
router.get('/contact', (_req, res) => res.render('contact', {title: 'Contact page'}));

export default router;
