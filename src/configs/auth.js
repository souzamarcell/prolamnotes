module.exports = {
  jwt: {
    // secret: process.env.APP_SECRET || "default",
    secret: process.env.AUTH_SECRET || "default",
    expiresIn: "1d",
  },
}
