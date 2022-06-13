const greet2 = (firstname, lastname) =>{
    if (firstname && lastname) {
        return `Hello there, ${firstname} ${lastname}}`;
    }else{
        throw new Error('Both names required for greet');
    }
}

console.log(greet2('Jane','Doe'));
