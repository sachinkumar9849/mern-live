const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  // token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjY2NzZhZDgyMjE0OTZiMGIyYzA2MyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA2NDUyODQyfQ.sqGv0hFdKMt-MDwE2bR_Xop0VaHwVlRE41maZAVAGck";
  return token;
}
// admin token =" token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjRhNjlhOTlhYmMxOTQ2YWEwMzBkOSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNjQ0OTM0OX0.8iJxPKzsahwB67u13pVcn8d01ZEw3ch-mJLtBmoTPWA";"