document.addEventListener('DOMContentLoaded', function () {
    const liElements = document.querySelectorAll('.nav-left-content li');
    const animationDiv = document.querySelector('.animation');
  
    liElements.forEach((li) => {
      li.addEventListener('mouseenter', function () {
          if (this.classList.contains('home')){
              liElements.forEach((li) => {
                  var aElement = this.querySelector("a");
                  aElement.style.color = "white";
              })
              var aElement = this.querySelector("a");
              aElement.style.color = "black";
              const width = `86.45px`;
              const left = `0px`;
              animationDiv.style.width = width;
              animationDiv.style.left = left;
          }
          else if(this.classList.contains('club')){
              liElements.forEach((li) => {
                  var aElement = this.querySelector("a");
                  aElement.style.color = "white";
              })
              var aElement = this.querySelector("a");
              aElement.style.color = "black";
              const width = `78px`;
              const left = `90.8px`;
              animationDiv.style.width = width;
              animationDiv.style.left = left;
          }
          else if(this.classList.contains('fixtures')){
              liElements.forEach((li) => {
                  var aElement = this.querySelector("a");
                  aElement.style.color = "white";
              })
              var aElement = this.querySelector("a");
              aElement.style.color = "black";
              const width = `96px`;
              const left = `173px`;
              animationDiv.style.width = width;
              animationDiv.style.left = left;
          }
          else if(this.classList.contains('shop')){
              liElements.forEach((li) => {
                  var aElement = this.querySelector("a");
                  aElement.style.color = "white";
              })
              var aElement = this.querySelector("a");
              aElement.style.color = "black";
              const width = `80px`;
              const left = `274px`;
              animationDiv.style.width = width;
              animationDiv.style.left = left;
          }   
          else if(this.classList.contains('about')){
              liElements.forEach((li) => {
                  var aElement = this.querySelector("a");
                  aElement.style.color = "white";
              })
              var aElement = this.querySelector("a");
              aElement.style.color = "black";
              const width = `88px`;
              const left = `358px`;
              animationDiv.style.width = width;
              animationDiv.style.left = left;
          }
      });
  
      li.addEventListener('mouseleave', function () {
          liElements.forEach((li) => {
              if (this.classList.contains('home')){
              var aElement = this.querySelector("a");
              aElement.style.color = "black";
              }
              else{
                  var aElement = this.querySelector("a");
                  aElement.style.color = "white";
              }
          })
          animationDiv.style.width = '86.45px';
          animationDiv.style.left = '0px';
      });
    });
  });
  