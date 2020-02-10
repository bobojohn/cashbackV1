const REGULAR_CATEGORY   = 'regular';
const INCREASED_CATEGORY = 'increased';
const SPECIAL_CATEGORY   = 'special';

const ONE_PERCENT  = 0.01;
const FIVE_PERCENT = 0.05;
const THIRTEEN_PERCENT = 0.3;
let cashback = 0;

const PURCHASES = [
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

 for (const PURCHASE of PURCHASES){
     if (PURCHASE.category === REGULAR_CATEGORY) {
          cashback += PURCHASE.amount * ONE_PERCENT;
        }else if(PURCHASE.category ===INCREASED_CATEGORY){
          cashback += PURCHASE.amount * FIVE_PERCENT;
        }else if(PURCHASE.category ===SPECIAL_CATEGORY){
          cashback += PURCHASE.amount *THIRTEEN_PERCENT
        }
 }
 const LIMIT_CASHBACK = 3000;
 if(cashback > LIMIT_CASHBACK){
     cashback=LIMIT_CASHBACK
}
 
 console.log(cashback)