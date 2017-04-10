/* Small library created be Ithan Lara
    Make thinks easy by adding some extra utilities to javascript
*/

//Define the Arsy object to store variables

// Random function to arrays, will return a random value from and array
Array.prototype.random = function(){
    return this[Math.floor(Math.random() * this.length)] // Return a value from itself
}

// Shufle the given array
Array.prototype.shufle = function (){
    let arrayToShufle = this, // Save the current Array
        arrayShufled  = [  ]; // Create a new Empty Array to be returned
    while(arrayToShufle.length > 0){ // While arrayToShuffle have more then 1 Element select a random one
        arrayShufled.push(arrayToShufle.splice(Math.floor(Math.random() * arrayToShufle.length),1)[0]) //push into arrayShufled the selected Element and remove it from arrayToShuffle
    }
    return arrayShufled; // Return the array arrayShufled shufled
}

//Return the array switching 2 values

Array.prototype.switch = function(indexOfTheFirstItem , indexOfTheSecondtItem){ //It expects 2 parameters
    if(typeof indexOfTheFirstItem == 'number' && typeof indexOfTheSecondtItem == 'number'){  //Check if the parameters are numbers
        if(indexOfTheFirstItem > (this.length - 1) || indexOfTheFirstItem < 0 || indexOfTheSecondtItem > (this.length - 1) || indexOfTheSecondtItem < 0){ //Check if the numbers are between the array length
            console.log('%cThe given index must be between the length of the given array', 'color: #f00'); //Console.log and error if the numbers aren't in the array's length
        } else{  
            firsIte                        = this[indexOfTheFirstItem],     // Save the firstItem
            this[indexOfTheFirstItem]      = this[indexOfTheSecondtItem],   // Set the firstIndex to the second item
            this[indexOfTheSecondtItem]    = firsItem;                      // Set the saved item to the second index 
            return this;                                                    // Return the array updated
        }
    } else {
        console.log('%cThe given index are incorrect, they must be a number.', 'color: #f00');  //If the parameters are wrong, console.log and error
    }
}

//Return a window from the array  

Array.prototype.window = function(startingIndex , lengthOfTheWindow){
    let arrayWindow = []; // Create the array to return
    arrayWindow = this.filter((val,index)=>{
        return index >= startingIndex && index < lengthOfTheWindow + 1  //Return the elements where the index is higher then the startingIndex and less then the lengthOfTheWindow +1
    })
    return arrayWindow
}
