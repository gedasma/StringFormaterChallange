const stringFormatter = str => {
    let returnString = ''
    for(let i = 0; i < str.length; i++)
    {
        if(i != 0){
            returnString += '-'
        }
        for(let j = 0; j <= i; j++)
        {
            if(j == 0){
                returnString += str[i].toUpperCase()
            }
            else{
                returnString += str[i].toLowerCase()
            }
        }
    }
    return returnString
};

let inputField = document.querySelector('input')
inputField.addEventListener('input', () =>{
    document.querySelector('p').textContent = stringFormatter(inputField.value)
})