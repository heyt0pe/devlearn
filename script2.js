const users = [
    {
        firstName: "Tope",
        dob: 1990,
        isAdult: null,
    },
    {
        firstName: "Paul",
        dob: 2007,
        isAdult: null,
    },
    {
        firstName: "Elvis",
        dob: 2005,
        isAdult: null,
    }
]



for(let i = 0; i < users.length; i++){
    const currentAge = getCurrentAge(users[i].dob);
    if(currentAge < 18){
        users[i].isAdult = false;
    }else{
        users[i].isAdult = true;
    }
}