function mystery(n) {
    if(n <= 1)
        return biggercount += 1;
    else {
        var count = 0;
        for(var i = 0; i < n*n; i++) {
            for(var j = 0; j < n; j++) {
                for(var k = 0; k < n*n; k++) {
                    count = count + 1;
                }
            }
        }

        mystery(n / 3);
        mystery(n / 3);
        mystery(n / 3);
        
        return (biggercount += count);
    }
}

biggercount = 0;
console.log(mystery(3) + "\n"); //3
biggercount = 0;
console.log(mystery(9) + "\n"); //9
biggercount = 0;
console.log(mystery(27) + "\n"); //27