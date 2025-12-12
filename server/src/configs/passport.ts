import passport from "passport";
import { Strategy as GoogleStrategy, Profile } from "passport-google-oauth20";
import {
  GOOGLE_CALLBACK_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "./env";

import { prisma } from "../configs/prisma";
import { HTTPError } from "../types/types";

//function is used to serialize the user payload
passport.serializeUser((user, done) => {
  done(null, user);
});

//function is used to deserialize the user payload
passport.deserializeUser((user: Express.User, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID!,
      clientSecret: GOOGLE_CLIENT_SECRET!,
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile: Profile, done) => {
      try {
        const email = profile.emails?.[0].value;

        if (!email) {
          return done(new HTTPError("Email not found", 404), false);
        }
        console.log(profile.photos?.[0].value);
        // Try to find existing user
        const user = await prisma.users.findUnique({
          where: { email },
        });

        const profileUrl = profile.photos?.[0].value;
        console.log(user!);
        if (!user?.profileUrl) {
          await prisma.users.update({
            where: { email },
            data: { profileUrl },
          });
        }
        // Success
        return done(null, user!);
      } catch (err) {
        return done(err as any, false);
      }
    }
  )
);

export default passport;
