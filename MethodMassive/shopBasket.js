function shopBasket(sum, quantity, promo) {

    if ( promo == "ДАРИМ300") {
        (sum < 0) ? sum = 0 : sum -= 300;
    }

     if ( quantity >= 10) {
         sum *= 0.95 ;
    }

     if ( sum > 50000) {
         sum -= (sum - 50000) * 0.20;
    }

     if ((promo == "СКИДКА15") && sum >= 20000) {
         sum *= 0.85;
    }

    return sum;
}

console.log(shopBasket(55000, 5, "ДАРИМ300"));
