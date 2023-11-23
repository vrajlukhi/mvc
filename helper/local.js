// const user = require("../models/user.schema")
// const Strategy = require("passport-local").Strategy

// const local = (passport) => {
//     passport.use(new Strategy({usernameField:"email"},async (email, password, done) => {
//         let User = await user.findOne({ email: email })

//         if (!User) {
//             return done(null, false)
//         }
//         if (password != User.password) {
//             return done(null, false)
//         }
//         return done(null, User)
//     }))

//     passport.serializeUser((user, done) => {
//         return done(null, user.id)
//     })
//     passport.deserializeUser(async (id, done) => {
//         let User = await user.findById(id)
//         return done(null, User)
//     })
// }
// module.exports = local