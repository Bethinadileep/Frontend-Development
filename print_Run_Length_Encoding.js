function printRLE(str) {
    let n = str.length;
    for(let i = 0; i < n; i++) {
        let count = 0;
        while(i < n - 1 && str[i] == str[i+1]) {
            i++;
            count++;
        }
        document.write(str[i]+count);
    }
}
let str = "wwwwaaadeesss";
printRLE(str);
