const projects = document.getElementById("nav-1");
const home = document.getElementById("nav-2");
const work = document.getElementById("nav-3");
const about = document.getElementById("nav-4");
///These get each div

projects.addEventListener("mouseover", fun1);
function fun1() {
    projects.style.background = "DodgerBlue";
  };

  projects.addEventListener("mouseout", fun2);
  function fun2(){
    projects.style.background ="none";
  }
  ///////

  home.addEventListener("mouseover", fun3);
function fun3() {
    home.style.background = "DodgerBlue";
  };

  home.addEventListener("mouseout", fun4);
  function fun4(){
    home.style.background ="none";
  }
//////

  work.addEventListener("mouseover", fun5);
function fun5() {
    work.style.background = "DodgerBlue";
  };

  work.addEventListener("mouseout", fun6);
  function fun6(){
    work.style.background ="none";
  }
/////

  about.addEventListener("mouseover", fun7);
function fun7() {
    about.style.background = "DodgerBlue";
  };

  about.addEventListener("mouseout", fun8);
  function fun8(){
    about.style.background ="none";
  }