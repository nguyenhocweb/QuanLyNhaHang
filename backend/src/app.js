import express from "express";


import morgan from "morgan"; // Ghi log request (GET /api/v1 200)
import helmet from "helmet";// Giấu thông tin server, bảo mật HTTP headers
import compression from "compression"; // Nén payload giảm dung lượng

import cors from "cors";
import corsOptions from "./core/middlewares/cors.middlewares.js";

import route from "./router/index.js";

const app= express();
// --- 1. INIT MIDDLEWARES ---
app.use(morgan("dev")); // 'dev' cho ngắn gọn, 'combined' cho production
app.use(helmet());
app.use(compression());


// cho phép kết nối server
app.use(cors(corsOptions));


app.use(express.json()); // Đọc được JSON từ body
app.use(express.urlencoded({ extended: true }));

// router 
app.use("/api",route);




export default app;