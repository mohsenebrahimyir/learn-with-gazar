var array = [5, 4, 6, 1, 3, 2]


for (var i = 0; i < array.length ; i++) {
    for (var j = 0; j < array.length ; j++) {
        if (array[i] < array[j]) {
            var temp = array[j]
            array[j] = array[i]
            array[i] = temp
        }
    }
}

console.log(array)