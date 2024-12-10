import express from 'express';
import path from "path";


// expressni 4 ta bo'limi mavjud:
/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));  // middleware (pattern)integration hisoblanadi. burak adminka loyihamizni BSSR usulida quramiz, frontendimizga kerak bo'ladigon css, image shu kabi sourceslarni butun browserlarga ochib beriladi.
app.use(express.urlencoded({extended: true}));
app.use(express.json()); // rest api sifatida request bo'layotgan datalarni bodysida kelayotgan json datani o'tkazishga ruxsat beryapti
/** 2-SESSIONS **/
/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/

export default app; 