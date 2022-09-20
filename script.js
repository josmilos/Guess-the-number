let counter = 0;
let correctNumber;
let guessedNumber;

function GetNumber(){
    correctNumber = Math.ceil((Math.random()) * 10);
}

function Guess(){

    // let rem = document.querySelector('.node');
    // rem.remove();


    if(isNaN(document.querySelector('#entered').value)){
        let newDiv = document.createElement('div');
        newDiv.classList = 'node';
        newDiv.setAttribute('colour', 'black');
        let newDivText = document.createTextNode('Your input was not a number. Please enter number!');
        newDiv.appendChild(newDivText);
        
        let container = document.querySelector('#div1');
        
        container.appendChild(newDiv);
        return;
    }

    guessedNumber = parseInt(document.querySelector('#entered').value);
    // console.log(typeof(guessedNumber));
    // console.log((guessedNumber));
    if(counter === 0){
        console.log('New game started');
        GetNumber();
        console.log('Correct number is ' + correctNumber);
        counter++;
        if(guessedNumber == correctNumber){
            
            // console.log('Tacan broj' + correctNumber);
            // console.log('Moj broj' + guessedNumber);
            let newDiv = document.createElement('div');
            newDiv.classList = 'node';
            newDiv.setAttribute('color', 'green');
            let newDivText = document.createTextNode('Your guess was correct!');
            newDiv.appendChild(newDivText);
    
            let container = document.querySelector('#div1');
    
            container.appendChild(newDiv);
            //GetNumber();
            counter = 0;
            return;
        }
        else if(counter === 3){
            // console.log('Poslednji pokusaj');
            // console.log('Tacan broj' + correctNumber);
            // console.log('Moj broj' + guessedNumber);

            if(guessedNumber == correctNumber){
                // console.log('Tacan broj' + correctNumber);
                // console.log('Moj broj' + guessedNumber);
                let newDiv = document.createElement('div');
                newDiv.classList = 'node';
                newDiv.setAttribute('color', 'green');
                let newDivText = document.createTextNode('Your guess was correct!');
                newDiv.appendChild(newDivText);
        
                let container = document.querySelector('#div1');
        
                container.appendChild(newDiv);
                // GetNumber();
                counter = 0;
                return;
            }
        }
        else
        {
                // console.log('pogresan pokusaj');
                // console.log('Tacan broj' + correctNumber);
                // console.log('Moj broj' + guessedNumber);

                
                let newDiv = document.createElement('div');
                newDiv.classList = 'node';
                newDiv.setAttribute('color', 'black');
                let newDivText;
                if(guessedNumber > correctNumber){
                    newDivText = document.createTextNode('Your number was greater than correct one! Try again');
                }
                else{
                    newDivText = document.createTextNode('Your number was lower than correct one! Try again');
                }
                
                newDiv.appendChild(newDivText);
    
                let container = document.querySelector('#div1')
    
                container.appendChild(newDiv);
                
        }
    }
    else if(counter === 3)
    {
        // ispisati da nije pogodjen broj
        // console.log('Poslednji pokusaj');
        // console.log('Tacan broj' + correctNumber);
        // console.log('Moj broj' + guessedNumber);

        if(guessedNumber == correctNumber){
            // console.log('Tacan broj' + correctNumber);
            // console.log('Moj broj' + guessedNumber);
            let newDiv = document.createElement('div');
            newDiv.classList = 'node';
            newDiv.setAttribute('color', 'green');
            let newDivText = document.createTextNode('Your guess was correct!');
            newDiv.appendChild(newDivText);
    
            let container = document.querySelector('#div1');
    
            container.appendChild(newDiv);
            // GetNumber();
            // counter = 0;
            return;
        }
        else{
            // console.log('Poslednji pokusaj - POGRESAN');
            let newDiv = document.createElement('div');
            newDiv.classList = 'node';
            newDiv.setAttribute('color', 'red');
            let newDivText = document.createTextNode('You did not manage to guess the correct number! Start a new game');
            newDiv.appendChild(newDivText);

            let container = document.querySelector('#div1')

            container.appendChild(newDiv);
            // GetNumber();
            counter = 0;
            return;
        }
    }
    else if(counter > 0 && counter < 3){
        if(guessedNumber == correctNumber){
            
            // console.log('Tacan broj' + correctNumber);
            // console.log('Moj broj' + guessedNumber);
            let newDiv = document.createElement('div');
            newDiv.classList = 'node';
            newDiv.setAttribute('color', 'green');
            let newDivText = document.createTextNode('Your guess was correct!');
            newDiv.appendChild(newDivText);
    
            let container = document.querySelector('#div1');
    
            container.appendChild(newDiv);
            // GetNumber();
            counter = 0;
            return;
        }
        else
        {
                counter++;

                if(counter === 3){
                    //GetNumber();
                    counter = 0;
                    let newDiv = document.createElement('div');
                    newDiv.classList = 'node';
                    newDiv.setAttribute('color', 'red');
                    let newDivText = document.createTextNode('You dclassList not manage to guess the correct number! Start a new game');
                    newDiv.appendChild(newDivText);

                    let container = document.querySelector('#div1')

                    container.appendChild(newDiv);
                    return;
                }
                else{
                    // console.log('pogresan pokusaj');
                    // console.log('Tacan broj' + correctNumber);
                    // console.log('Moj broj' + guessedNumber);
                    let newDiv = document.createElement('div');
                    newDiv.classList = 'node';
                    newDiv.setAttribute('color', 'black');
                    if(guessedNumber > correctNumber){
                        newDivText = document.createTextNode('Your number was greater than correct one! Try again');
                    }
                    else{
                        newDivText = document.createTextNode('Your number was lower than correct one! Try again');
                    }
                    newDiv.appendChild(newDivText);
        
                    let container = document.querySelector('#div1')
        
                    container.appendChild(newDiv);
                    // console.log('BROJ POKUSAJA ' + counter);
                }
                

                
                
        }   
    }

        
}