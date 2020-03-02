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
      for (let i = 0; i < collection.length; i++){
        var answer = predicate(collection[i])
      }
      console.log(answer)
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
