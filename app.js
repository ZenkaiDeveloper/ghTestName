  let form = document.getElementById("data-form");

  let searchBar = document.getElementById("search-bar");

  searchBar.addEventListener("keydown", function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      let userInput = searchBar.value;

      textbooks = textbooks.filter(function(element){
        return element.name.includes(userInput);
      })

    }
  })

  let handleClick = function(event){
    event.preventDefault();

    let name = event.currentTarget.name.value;
    let age = event.currentTarget.age.value;
    let color = event.currentTarget.color.value;

    console.log("Hi my name is "+name+" and I am "+ age+" my favorite color is " + color);
    console.log(event.target.name.innerText);
  }

  form.addEventListener("submit", handleClick);
