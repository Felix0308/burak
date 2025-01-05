import express from 'express';
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from './libs/config';

// TCP2
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from './libs/types/common';

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});


// expressni 4 ta bo'limi mavjud:
/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));  // middleware dizayn pattern hisoblanadi. burak adminka loyihamizni BSSR usulida quramiz, frontendimizga kerak bo'ladigon css, image shu kabi sourceslarni butun browserlarga public folderda ochib beriladi.
app.use(express.urlencoded({extended: true}));  // traditional API larga xizmat qiladi. Bu middleware form orqali yuborilgan ma'lumotlarni body parser yordamida o'qishga imkon beradi.{extended: true} - bu qism nested objects (murakkab obyektlar) bilan ishlashga ruxsat beradi. Masalan, form orqali yuborilgan ma'lumotlar serverda req.body orqali olinadi.
app.use(express.json()); // rest API larga xizmat qiladi. rest api sifatida request bo'layotgan datalarni bodysida kelayotgan json datani o'tkazishga ruxsat beryapti
app.use(morgan(MORGAN_FORMAT)); // middleware dizayn pattern =. backendimizni terminalda login bo'lishini tashkillashtirib beradi

/** 2-SESSIONS **/   // => authenticationni tashkillashtirib beradi
// request
// 1-tamg'ani qurish | 2- tamg'ani o'qish frontend.cookie.SID
app.use(
  session({
    secret: String(process.env.SESSION_SECRET), // MongoDB connection string
    cookie: {
      maxAge: 1000 * 3600 * 6, // 6s  => cookie ning amal qilish muddati millisekundlarda. 6 soat davomida cookie faol bo'ladi, Cookie vaqt tugagandan so'ng avtomatik o'chadi.
    },
    store: store, // Bu sessiyalarni saqlash uchun ishlatiladigan saqlash mexanizmini (store) belgilaydi.
    resave: true, //  biz belgilagan muddat bo'yicha userni sessionlarini saqlaydi, true bo'lsa oxirgi kirgandan bohslab yana shuncha muddat qo'shiladi, false esa qo'shilmaydi oldingi muddatda tugaydi.
    // resave: false,      // 10:30 auth => 13:30 (shu oraliqdfa active hisoblanadi), agar shu oraliqda misol 12:00 da kirsak ohirgi muddat 13:30 da qolaveradi, va 13:31 da o'chib ketadi,
    saveUninitialized: true, // true bo'lsa har bitta murojatchi uchun sessionlarni ochib beradi
  }) // false login bo'lmagan holatda ma'lumot saqlanmaydi./ va qancha foydalanilayotganini osongina osongina sattistika qilish mumkin
);
// request + session + member, response
app.use(function(req, res, next) {
  const sessisonInstance = req.session as T;  // as T => any dan qochish uchun ishlatiladi (key:string value: any)
  res.locals.member = sessisonInstance.member;  // res.local ga saqlayapmiz, local => ejs da o'qisa bo'ladigon variablellarni hosil qiladi
  next();
})


/** 3-VIEWS **/  // => frontend ni backend da quryapmiz bssr orqali
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/
app.use("/admin", routerAdmin);  // Middleware Design Pattern. SSR: EJS
app.use("/", router);  // SPA: REACT

export default app; 