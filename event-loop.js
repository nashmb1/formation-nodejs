(function(){
    console.log('step 0');

    setTimeout(function cb(){
        console.log('step 1');
    },5);

    console.log('Step 2');
    setTimeout(function cb1(){
        console.log('step 3');
    });
    console.log('step 4');

})();

