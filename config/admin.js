module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3a7ecfd662ffbc5abe7fb80fab7ded8d'),
  },
});
