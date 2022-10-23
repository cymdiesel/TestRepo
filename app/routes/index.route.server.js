import {Router} from "express";
import { displayAboutPage, displayContactPage, displayHomePage, displayProjectsPage, displayServicesPage } from "../controllers/index.controller.server.js";

const router = Router(); // initializing the router 

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/contact', displayContactPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);


export default router;

