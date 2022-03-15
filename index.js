// ----------------------------------------------------
// replication of forEach... not using forEach?
// ----------------------------------------------------
function myEach(collection, callback){
    for(let item in collection){
        callback(collection[item])
    }
    return collection
}
// ----------------------------------------------------
// replication of map... not using map?
// ----------------------------------------------------
function myMap(collection, callback){
    const newCollection = []
    for(let item in collection){
        newCollection.push(callback(collection[item]))
    }
    return newCollection
}
// ----------------------------------------------------
// replication of reduce... not using reduce?                   not done
// ----------------------------------------------------
function myReduce(collection, callback, value = -2){
    if(typeof collection === 'object'){
        collection = Object.values(collection)
    } 
    
    console.log('collection: ', collection)

    for(let item in collection){
        value = callback(value, collection[item], collection)
    }

    console.log('value', value)
    return value
}
// ----------------------------------------------------
// replication of find... not using find?
// ----------------------------------------------------
function myFind(collection, predicate){
    let foundItem = undefined
    for(let item in collection){
        if(predicate(collection[item]) === true){
            foundItem = collection[item];
            return foundItem
        } 
    }
}
// ----------------------------------------------------
// replication of find... not using find?
// ----------------------------------------------------

function myFilter(collection, predicate){
    const newArray = []
    if(typeof collection === 'object'){
        collection = Object.values(collection)
    } 

    for(let item in collection){
        if(predicate(collection[item]) === true){
            newArray.push(collection[item])
        } 
    }
    return newArray
}

// ----------------------------------------------------
// replication of length... not using length?
// ----------------------------------------------------
function mySize(collection){
    let count = 0
    if(typeof collection === 'object'){
        collection = Object.values(collection)
    } 

    for(let item in collection){
        count++
    }
    return count
}
// ----------------------------------------------------
// replication of first letter.
// ----------------------------------------------------
function myFirst(collection, numLetters = 1){
    if(typeof collection === 'object'){
        collection = Object.values(collection)
    } 

    if(numLetters == 1){
        return collection[0]
    }

    console.log(collection.slice(0, numLetters))
    return collection.slice(0, numLetters)
}
// ----------------------------------------------------
// replication of last letter.
// ----------------------------------------------------
function myLast(collection, numLetters = 1){
    if(typeof collection === 'object'){
        collection = Object.values(collection)
    } 

    const length = mySize(collection)

    if(numLetters == 1){
        return collection[length-1]
    }

    console.log(collection.slice(-numLetters))
    return collection.slice(-numLetters)
}


// ----------------------------------------------------
// replication of myKeys.
// ----------------------------------------------------
function myKeys(collection){
    if(typeof collection === 'object'){
         return Object.keys(collection)
    } 
}

// ----------------------------------------------------
// replication of myValues.
// ----------------------------------------------------
function myValues(collection){
    if(typeof collection === 'object'){
         return Object.values(collection)
    } 
}