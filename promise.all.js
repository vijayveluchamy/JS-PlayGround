$(() => {
  var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, [1,2,3,4,5]);
  });

  var baseUrl = 'https://jsonplaceholder.typicode.com/posts/';

  promise1.then((idArray) => {
    var promiseArray = [];
  
    idArray.forEach(id => {
      var url = baseUrl + id;
      promiseArray.push($.getJSON(url));
    });
    
    Promise.all(promiseArray).then(resp => {
      resp.forEach((post) => console.log(post.title));
    });
  });
});
