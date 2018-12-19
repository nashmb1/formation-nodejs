try {
    const a = 1;
    a = 2;
    console.log('ok');
} catch (e) {
    console.log(e);

}

try {
    const a = {b:1}; // la variable a est constante mais son contenu ne l'est pas
    a.b = 2;
    console.log('ok 2222');
} catch (e) {
    console.log(e);
}