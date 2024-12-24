import express from 'express';
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from './libs/config';

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});


// expressni 4 ta bo'limi mavjud:
/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));  // middleware (pattern)integration hisoblanadi. burak adminka loyihamizni BSSR usulida quramiz, frontendimizga kerak bo'ladigon css, image shu kabi sourceslarni butun browserlarga ochib beriladi.
app.use(express.urlencoded({extended: true}));  // Bu middleware form orqali yuborilgan ma'lumotlarni body parser yordamida o'qishga imkon beradi.{extended: true} - bu qism nested objects (murakkab obyektlar) bilan ishlashga ruxsat beradi. Masalan, form orqali yuborilgan ma'lumotlar serverda req.body orqali olinadi.
app.use(express.json()); // rest api sifatida request bo'layotgan datalarni bodysida kelayotgan json datani o'tkazishga ruxsat beryapti
app.use(morgan(MORGAN_FORMAT)); // middleware dizayn pattern

/** 2-SESSIONS **/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 3, // 3h
    },
    store: store,
    resave: true,          //  10:30 auth => 13:30 agar 12:00 da kirsak 3 soat qo'shilib 15:00 ga yangilanadi, ya'ni ohirgi kirgandan 3 soat mobayniada. userimiz ohirgi kirgan vaqti 3 soatdan dan bo'lsa bizni sessionimiz doim saqlanishi kerak degani ma'noni anglatadi
    // resave: false,      // 10:30 auth => 13:30 (shu oraliqdfa active hisoblanadi), agar shu oraliqda misol 12:00 da kirsak ohirgi muddat 13:30 da qolaveradi, va 13:31 da o'chib ketadi,
    saveUninitialized: true,
  })
);


/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/
app.use("/admin", routerAdmin);  // Middleware Design Pattern. SSR: EJS
app.use("/", router);  // SPA: REACT

export default app; 