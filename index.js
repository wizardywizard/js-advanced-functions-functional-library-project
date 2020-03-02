const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          alert(collection[i])
        }          
      }else{
        var collect = Object.values(collection)
        for (let i = 0; i < collect.length; i++){
          alert(collect[i])
        }
      }
      return collection
    },

    map: function(collection, callback) {
      var answer = []
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          answer.push(callback(collection[i]))
        }
      }else{
        var collect = Object.values(collection)
        for (let i = 0; i < collect.length; i++){
          answer.push(callback(collect[i]))
        }
      }
      return answer
    },

    reduce: function(collection, callback, acc) {
      let answer = 0
      let i = 0
      if (acc){
       answer = acc
      }else{
        answer = collection[0]
        i = 1
      }      
        for (i ; i < collection.length; i++){
          answer = callback(answer, collection[i])
        }
      return answer
    },

    find: function(collection, predicate){
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          if(predicate(collection[i])){
           return collection[i]
          }
        }
      }else{
        return undefined
      }
    },

    filter: function(collection, predicate){
      var answer = []
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          if(predicate(collection[i])){
            answer.push(collection[i])
          }
        }
      }else{
        return undefined
      }
      return answer
    },

    size: function(collection){
      if (Array.isArray(collection)){
        return collection.length
      }else{
        return Object.keys(collection).length
      }
    },

    first: function(array, num){
      if (num){
        return array.slice(0, num)
      }else{
        return array[0]
      }
    },

    last: function(array, num){
      if (num){
        return array.slice(-Math.abs(num))
      }else{
        return array.slice(-1)[0]
      }
    },

    compact: function(array){
      let answer = []
      for (let i = 0; i < array.length; i++){
        if (array[i]){
          answer.push(array[i])
        }
      }
      return answer
    },

    sortBy: function(array, callback){ 
      const newArr = [...array]   
      return newArr.sort(function(a, b){
        return callback(a) - callback(b)
      })      
    },

    flatten: function(array, word){
      if (word){
        return array.flat(1)
      }else{
        return array.flat()
      }
    },    

    uniq: function(array, sorted, callback){

    },

    keys: function(object){
      return Object.keys(object)
    },

    values: function(object){
      return Object.values(object)
    },

    functions: function(object) {  
      return object.sort(function(a, b){
        return a - b
      })      
    },


  }
})()

fi.libraryMethod()
