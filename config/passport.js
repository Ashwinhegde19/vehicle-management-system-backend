import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/user.js';

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, async (username, password, done) => {
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return done(null, false, { message: 'User not found' });
    }

    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Invalid password' });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

export default passport;
