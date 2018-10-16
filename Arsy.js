/* Small library created be Ithan Lara
    Make thinks easy by adding some extra utilities to javascript
*/

//Define the Arsy object to store variables

    // --------------------------------------
    // Return a random value from and array
    // --------------------------------------

    Array.prototype.random = function(){
        return this[Math.floor(Math.random() * this.length)]
    }

    // --------------------------------------
    // Shufle the given array
    // --------------------------------------


    Array.prototype.shufle = function (){
      return this.sort( _ => Math.random() - 0.5);
    }


    // --------------------------------------
    //Return the array switching 2 values
    // --------------------------------------

    Array.prototype.switch = function(indexOfTheFirstItem , indexOfTheSecondtItem){                                                                                             // Switch function definition, it expects 2 parameters
        let arrayToSwitch = JSON.parse(JSON.stringify(this));                                                                                                                       // Create the Array to return from self
        if(typeof indexOfTheFirstItem == 'number' && typeof indexOfTheSecondtItem == 'number'){                                                                                     // Check if the parameters are numbers
            if(indexOfTheFirstItem > (arrayToSwitch.length - 1) || indexOfTheFirstItem < 0 || indexOfTheSecondtItem > (arrayToSwitch.length - 1) || indexOfTheSecondtItem < 0){         // Check if the numbers are between the array length
                console.log('%cThe given index must be between the length of the given array', 'color: #f00');                                                                              // Console.log and error if the numbers aren't in the array's length
                return new Error('Incorrect number');                                                                                                                                       // Return Error
            } else{                                                                                                                                                                     // If they are then
                let firsItem                            = arrayToSwitch[indexOfTheFirstItem];                                                                                           // Save the firstItem
                arrayToSwitch[indexOfTheFirstItem]      = arrayToSwitch[indexOfTheSecondtItem],                                                                                             // Set the firstIndex to the second item
                arrayToSwitch[indexOfTheSecondtItem]    = firsItem;                                                                                                                         // Set the saved item to the second index
                return arrayToSwitch;                                                                                                                                                       // Return the array updated
            }                                                                                                                                                                           // End of if
        } else {                                                                                                                                                                    // If they are not numbers
            console.log('%cThe given index are incorrect, they must be a number.', 'color: #f00');                                                                                      // Console.log and error
            return new Error('Number expected')                                                                                                                                         // Return error
        }                                                                                                                                                                           // End of if
    }                                                                                                                                                                           // End of function switch

    // --------------------------------------
    //Return a window from the array
    // --------------------------------------

    Array.prototype.window = function(startingIndex , lengthOfTheWindow){                       // Window function definition
        let arrayWindow = [];                                                                   // Create the array to return
        arrayWindow = this.filter((val,index)=>{                                                // Set arrayWindow to the filter results
            return index >= startingIndex && index < startingIndex + lengthOfTheWindow          // Return the elements where the index is higher then the startingIndex and less then the lengthOfTheWindow +1
        })                                                                                      // End of filter
        return arrayWindow                                                                      // Return the results
    }                                                                                           // End of function window
    // ------------------------------------------------
    //Return and array of index of the given element
    // ------------------------------------------------

    Array.prototype.search = function(element){                                     // Search function definition
        let arrayElementIndex = [];                                                 // Create the array to return
        this.map( (val,index)=>{                                                    // Loop thrue the array
            if(element === val){ arrayElementIndex.push(index) }                    // If the element match the value of the array, return the index of the value
        });                                                                         // End of loop
        if(arrayElementIndex.length > 0){                                           // If the array length is higher then 0
            return arrayElementIndex;                                               // Return de array
        } else {                                                                    // If its 0
            return false                                                            // Return false
        }                                                                           // End of if
    }                                                                               // End of function search

    // --------------------------------------
    //Remove an element from the array
    // --------------------------------------

    Array.prototype.remove = function(element, boleean){                                            // Remove function definition
        let arrayRemovedElements = JSON.parse(JSON.stringify(this));                                // Create a new array to return from self
        boleean = boleean || false;                                                                 // If no boleean is given, set it to false
        if(this.indexOf(element) > -1){                                                             // If the given element exist do
            if(boleean){                                                                            // If the given boleean is true process all the elements
                while(arrayRemovedElements.indexOf(element) > -1){                                  // While there is a Match
                    arrayRemovedElements.splice(arrayRemovedElements.indexOf(element),1);           // Delete the element matched
                }                                                                                   // End of while
            } else {                                                                                // If the boleean is false
                arrayRemovedElements.splice(arrayRemovedElements.indexOf(element),1);               // Delete 1 element
            }                                                                                       // End of If
            return arrayRemovedElements;                                                            // Return arrayRemovedElements
        } else {                                                                                    // If the given element dosn't exist
            return false                                                                            // Return false
        }                                                                                           // End of if
    }                                                                                               // End of function remove
