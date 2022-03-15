module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fc4f0e47f6c3aebe81d3c6ce122c7b5d'),
  },
});
