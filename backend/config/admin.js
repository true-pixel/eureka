module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '57c57a0890368334b983347886552a16'),
  },
});
