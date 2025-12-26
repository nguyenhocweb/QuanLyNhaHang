import "dotenv/config.js"
export const appConfig={
      port:process.env.PORT,
      node:process.env.NODE_ENV,
      url_client:process.env.URL_CLIENT,
}