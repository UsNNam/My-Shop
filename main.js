tmp1 = document.getElementsByClassName("sign_up_form");
function display_sign_up(){
  Array.from(tmp1).forEach(element => {
    element.style.display = "flex";
  });
}


function back_from_sign_up(){
    Array.from(tmp1).forEach(element => {
      element.style.display = "none";
    });

}

signIn = document.getElementsByClassName("sign_in_form");

function display_sign_in(){
  Array.from(signIn).forEach(element => {
    element.style.display = "flex";
  });
}


function back_from_sign_in(){
    Array.from(signIn).forEach(element => {
      element.style.display = "none";
    });

}

function change_sign_in_to_sign_up(){
  back_from_sign_up();
  display_sign_in();

}