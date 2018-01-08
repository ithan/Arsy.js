# Arsy.js
Small library to add additional functionality to arrays 

You have 8 (for now ) buildin extra functions to Arrays
```
  - random
  - shufle
  - switch
  - window
  - search
  - remove
  - next
  - prev
```

### Any of this function will modify the array itself, they only will return the expected value
 
 ___________________________________________________________
## Array.random()

  This will return a random value from Array

  ``  [1,2,3].random() `` will return ``1`` or ``2`` or ``3``
  
  ___________________________________________________________
  ## Array.shufle()

  This will shufle the current Array

  ``  [1,2,3].shufle() `` will return ``[2,3,1]`` or ``[3,1,2]`` ...
  
  ___________________________________________________________
  ## Array.switch(first element index to switch, second element index to switch)

  This will swap 2 values from the given index in the array
      
  ``  [1,2,3].switch(1,2) `` will return `` [1,3,2]``
  
  
  ___________________________________________________________
  ## Array.window(Starting index, size)

  This will return a window from the index to the size

  ``  [1,2,3,4,5,6].window(2,3) `` will return ` [3,4,5]``
  
  ___________________________________________________________
  ## Array.search(value to search)

  This will return the index of all the matched elements,if it find any match, always will return an array, if it can't find any match, will return false
  ``  [1,2,3,4,4].search(4) `` will return ``[3,4]``
  
  ``  [1,2,3,4,4].search(5) `` will return ``false``
  
   ___________________________________________________________
  ## Array.remove(element to remove, will it remove all the matches, or only the first one? (true or false expected))

  This will remove the first matched item, if true is given as second parameter, it will remove all the matched items, if no matches are found, it will return false
  
  ``  [1,2,3,4,4].remove(4) `` will return ``[1,2,3,4]``
  
  ``  [1,2,3,4,4].remove(4,true) `` will return ``[1,2,3]``
  
  ``  [1,2,3,4,4].remove(5,true) `` will return ``false``
  
    ___________________________________________________________
  ## Array.next(value)

  Return the next element in the array from the first match of the given element

  ``  [1,2,3,4,5,6].next(2) `` will return `` 3``
  
  ___________________________________________________________
  ## Array.prev(value)

  Return the previus element in the array from the first match of the given element

  ``  [1,2,3,4,5,6].prev(2) `` will return `` 1``
  
  ___________________________________________________________
  
 
