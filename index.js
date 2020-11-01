function kangaroo(x1, v1, x2, v2){
    if(x1 > x2 && v1 > v2) {
       return 'NO';
    }
    if(x1 < x2 && v1 < v2) {
       return 'NO';
    }
    const saltos = (x2-x1)/(v1-v2);
    if(Number.isInteger(saltos))return 'YES';
    return 'NO';
}





