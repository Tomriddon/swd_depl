import express from 'express';
import { controllers } from "../controller/controller.js";
// import the current controller

const router = express.Router();
router.get('/',controllers.mainpage.bind(controllers));
router.get('/info',controllers.infopage.bind(controllers));
router.get('/connect',controllers.connectpage.bind(controllers));
router.get('/guide',controllers.guidepage.bind(controllers));
router.get('/connected',controllers.connectAction.bind(controllers));
export const routes = router;
