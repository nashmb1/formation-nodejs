function oldHorse() {
    this.age = 0;

    setInterval(function(){
            this.age++;
            console.log('Old horse', this.age)
    }, 1000);
}

var p = new oldHorse();


function oldHorse1() {
    this.age = 0;

    setInterval(() => {
            this.age++;
            console.log('Old horse', this.age)
    }, 1000);
}

var p = new oldHorse1();