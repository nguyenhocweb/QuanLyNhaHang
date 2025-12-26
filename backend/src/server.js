import app from "./app";
import { appConfig } from "./config/app.config";
const port=appConfig.port;


app.listen(port,()=>{
    console.log(`✅ Server HTTP chạy tại http://localhost:${port}`);
})