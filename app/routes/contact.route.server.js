import {Router} from 'express';

import { DisplayContactAddPage, DisplayContactEditPage, DisplayContactList, ProcessContactAddPage, ProcessContactDelete, ProcessContactEditPage } from '../controllers/contact.controller.server.js';

const router = Router();

router.get('/contact-list', DisplayContactList);
router.get('/contact-add', DisplayContactAddPage);
router.post('/contact-add', ProcessContactAddPage);
router.post('/contact-edit/:id', ProcessContactEditPage);
router.get('/contact-edit/:id', DisplayContactEditPage);
router.get('/contact-delete/:id', ProcessContactDelete);

export default router;