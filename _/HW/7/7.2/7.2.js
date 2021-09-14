function getSubscriptionPrice(type) {
  let price;
  switch(type) {
    case 'starter':
      price = 0;
      break;
    case 'professional':
      price = 20;
      break;
    case 'organization':
      price = 50;    
      break;
  }
  return price;
};
  
console.log(getSubscriptionPrice('starter'));
console.log(getSubscriptionPrice('professional'));
console.log(getSubscriptionPrice('organization'));
