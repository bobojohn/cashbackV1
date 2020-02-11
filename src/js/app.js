const REGULAR_CATEGORY   = 'regular';
const INCREASED_CATEGORY = 'increased';
const SPECIAL_CATEGORY   = 'special';

const ONE_PERCENT  = 0.01;
const FIVE_PERCENT = 0.05;
const THIRTEEN_PERCENT = 0.3;
let cashback = 0;
const LIMIT_CASHBACK = 3000;

const purchases = [
    {
         amount:1000,
         category:REGULAR_CATEGORY,
    },
    {
         amount:2000,
         category:INCREASED_CATEGORY,
    },
    {
         amount:30000000,
         category:SPECIAL_CATEGORY,
    },            
];

 for (const purchase of purchases){
     if (purchase.category === REGULAR_CATEGORY) {
          cashback += purchase.amount * ONE_PERCENT;
        }else if(purchase.category ===INCREASED_CATEGORY){
          cashback += purchase.amount * FIVE_PERCENT;
        }else if(purchase.category ===SPECIAL_CATEGORY){
          cashback += purchase.amount *THIRTEEN_PERCENT
        }
 }
 if(cashback > LIMIT_CASHBACK){
     cashback=LIMIT_CASHBACK
}
 
 console.log(cashback)