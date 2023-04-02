require('dotenv').config();

export const environment = {
  production: false,
  auth0: {
    domain: process.env['AUTH0_DOMAIN'] as string,
    clientId: process.env['AUTH0_CLIENT_ID'] as string,
    authorizationParams: {
      redirect_uri: process.env['AUTH0_CALLBACK_URL'] as string,
    },
  },
};
