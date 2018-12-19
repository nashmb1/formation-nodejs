function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        });
    });
}

async function asynCall() {
    console.log('calling');
    var result = resolveAfter2Seconds();
    console.log(result);
}

asynCall();css/main.css