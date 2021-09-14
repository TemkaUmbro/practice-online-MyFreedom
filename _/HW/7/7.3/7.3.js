function checkPasswor(password) {
  let message;
  const ADMIN_PASSWORD = 'jqueryismyjam';
  switch(password) {
    case null:
      message = 'Canceled by user!';
      break;
    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;
    default:
      message = 'Access denied, wrong password!';    
  }
  return message;
};
  
console.log(checkPasswor('mangohackzor'));
console.log(checkPasswor(null));
console.log(checkPasswor('polyhax'));
console.log(checkPasswor('jqueryismyjam'));
