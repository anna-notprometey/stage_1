let car = {
    color: 'black'
}
car.color = 'green';
car.power = function() {
    console.log('The engine power is 100');
};

function sum (apples, pears) {
    return apples + pears;
}

function defineType(a) {
    console.loge(typeof(a));
}

function showMessage(name) {
    if (typeof name === 'string' && name != '') {
        alert(`Hello, ${name}`);
     } else {
        alert('there is no such name');
    }
}

function primeNum(num) {
    if (num>1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return "It's composite number";
            }
        }
        return "It's rime number";
    } else {
        return "Number should be more than 1";
    }
};





