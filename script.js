function checker(number) {
    var arr = [];

    var temp;

    for (var i = 1; i <= number; i++) {

        temp = i;
        if (((i % 2) == 0) || ((i % 3) == 0) || ((i % 5) == 0)) {
            if ((i % 2) == 0) {
                temp = "yu";
            }
            if ((i % 3) == 0) {
                if (temp !== i) temp += "-gi";
                else temp = "gi";
            }
            if ((i % 5) == 0) {
                if (temp !== i) temp += "-oh";
                else temp = "oh";
            }

        }

        arr.push(temp);
    }
    return arr;
}
console.log(checker(100));
