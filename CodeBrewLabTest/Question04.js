async function fetchMoviesJSON() {

    // fetching API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Checking response status
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

    // consverting resonse into JSON Object
    const movies = await response.json();
    
    // Getting first 5 Post 
    const firstFivePost = movies.filter(obj => obj.id <= 5);
    console.log(firstFivePost.length);

    // Getting titles of first posts
    const titleArray = []

    // showing normal error
    if(firstFivePost.length < 5 && firstFivePost.length > 0){
        const message = ` An error has occured: IndexOutOfBound`
        throw new Error(message)
    }else{
        firstFivePost.forEach((Element) => {
            titleArray.push(Element.title);
        })

        
    }

    return titleArray;

    
  }
  
  
  fetchMoviesJSON().then(movies => {
        console.log(movies);
  }).catch(error => {
    console.log(error.message); 
  });