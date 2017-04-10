/* Small library created be Ithan Lara
    Make thinks easy by adding some extra utilities to javascript
*/

//Define the Arsy object to store variables

// Random function to arrays, will return a random value from and array
    'use strict'
    Array.prototype.random = function(){
        return this[Math.floor(Math.random() * this.length)] // Return a value from itself
    }

    // Shufle the given array
    Array.prototype.shufle = function (){
        let arrayToShufle = JSON.parse(JSON.stringify(this)), // Save the current Array
            arrayShufled  = [  ]; // Create a new Empty Array to be returned
        while(arrayToShufle.length > 0){ // While arrayToShuffle have more then 1 Element select a random one
            arrayShufled.push(arrayToShufle.splice(Math.floor(Math.random() * arrayToShufle.length),1)[0]) //push into arrayShufled the selected Element and remove it from arrayToShuffle
        }
        return arrayShufled; // Return the array arrayShufled shufled
    }

    //Return the array switching 2 values

    Array.prototype.switch = function(indexOfTheFirstItem , indexOfTheSecondtItem){ //It expects 2 parameters
        arrayToSwitch = JSON.parse(JSON.stringify(this));
        if(typeof indexOfTheFirstItem == 'number' && typeof indexOfTheSecondtItem == 'number'){  //Check if the parameters are numbers
            if(indexOfTheFirstItem > (arrayToSwitch.length - 1) || indexOfTheFirstItem < 0 || indexOfTheSecondtItem > (arrayToSwitch.length - 1) || indexOfTheSecondtItem < 0){ //Check if the numbers are between the array length
                console.log('%cThe given index must be between the length of the given array', 'color: #f00'); //Console.log and error if the numbers aren't in the array's length
            } else{
                firsItem                                = arrayToSwitch[indexOfTheFirstItem],     // Save the firstItem
                arrayToSwitch[indexOfTheFirstItem]      = arrayToSwitch[indexOfTheSecondtItem],   // Set the firstIndex to the second item
                arrayToSwitch[indexOfTheSecondtItem]    = firsItem;                      // Set the saved item to the second index
                return arrayToSwitch;                                                    // Return the array updated
            }
        } else {
            console.log('%cThe given index are incorrect, they must be a number.', 'color: #f00');  //If the parameters are wrong, console.log and error
        }
    }

    //Return a window from the array

    Array.prototype.window = function(startingIndex , lengthOfTheWindow){
        let arrayWindow = []; // Create the array to return
        arrayWindow = this.filter((val,index)=>{
            return index >= startingIndex && index < startingIndex + lengthOfTheWindow  //Return the elements where the index is higher then the startingIndex and less then the lengthOfTheWindow +1
        })
        return arrayWindow
    }

    //Return and array of index of the given element

    Array.prototype.search = function(element){
        let arrayElementIndex = []; // Create the array to return
        this.forEach( (val,index)=>{ // Loop thrue the array
                if(element === val){ arrayElementIndex.push(index) }  // If the element match the value of the array, return the index of the value
            }
        );
        if(arrayElementIndex.length > 0){
            return arrayElementIndex; // Return de array if is length is higher then 0
        } else {
            return false // Return false if is length is 0
        }

    }

    //Remove and element from the array

    Array.prototype.remove = function(element, boleean){
        let arrayRemovedElements = JSON.parse(JSON.stringify(this)); //Create a new array to return
        boleean = boleean || false; //If no boleean is given, set it to false
        if(this.indexOf(element) > -1){ //If the element exist
            if(boleean){ //If the given boleean is true process all the elements
                while(arrayRemovedElements.indexOf(element) > -1){
                    arrayRemovedElements.splice(arrayRemovedElements.indexOf(element),1);
                }
            } else {
                arrayRemovedElements.splice(arrayRemovedElements.indexOf(element),1); //If is false, process 1 element

            }
            return arrayRemovedElements; //Return arrayRemovedElements
        } else {
            return false
        }
        
    }
