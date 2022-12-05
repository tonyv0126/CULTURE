
            var slideshow1 = document.getElementById("slideshow1");
            slideshow1.currentSlideIndex = 1;
            showSlides(slideshow1.currentSlideIndex, slideshow1);

            var slideshow2 = document.getElementById("slideshow2");
            slideshow2.currentSlideIndex = 1;
            showSlides(slideshow2.currentSlideIndex, slideshow2);

            var slideshow3 = document.getElementById("slideshow3");
            slideshow3.currentSlideIndex = 1;
            showSlides(slideshow3.currentSlideIndex, slideshow3);



            function plusSlides(n, slideshow) {
              showSlides(slideshow.currentSlideIndex += n, slideshow);
              slideshow.querySelector(".next").style.animation = "none";
            }


function showSlides(n, slideshow) {
              let i;
              var slides = slideshow.getElementsByClassName("mySlides");



              if (n > slides.length) {slideshow.currentSlideIndex = 1}
              if (n < 1) {slideshow.currentSlideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }

              slides[slideshow.currentSlideIndex-1].style.display = "block";
}

let no_heart = 5;
showheart(5);


function answer(name, id){

  let output = document.getElementById(id);
  healthbar = document.getElementById("healthbar");
  healthbar.style.animation = 'none';
  void healthbar.offsetWidth; //This line is important to make trigger reflow in animation



      let rates = document.getElementsByName(name);

      let n = 0;


      rates.forEach((rate) =>
      {
        if (rate.checked && rate.id == "correct")
        {
            output.innerHTML = '<span style="color:green"> Correct. </span> Next question ? ' ;
            n=1;



            if (name.includes("dish"))
            {
                document.getElementById("next1").style.animation = 'glownext 1500ms infinite';

            }

            else if (name.includes("place"))
            {

                document.getElementById("next2").style.animation = 'glownext 1500ms infinite';

            }

            else if (name.includes("history"))
            {

                document.getElementById("next3").style.animation = 'glownext 1500ms infinite';

            }

        }

      });

      if (n == 0)
      {
          output.innerHTML = '<span style="color:red"> Wrong. </span> try Again ';
          no_heart -= 1;
          healthbar.style.animation = 'glowred 1s';



      }
      showheart(no_heart);
}



function showheart(no)
  {


    document.getElementById("healthbar").innerHTML =  'Attempt left: ' + '&#128150;'.repeat(no);


    if (no == 0)
    {
      document.getElementById("healthbar").style.background =  'red';
      document.getElementById("healthbar").innerHTML =  ' Game over! Refresh page to try again :)';
      document.getElementById("healthbar").style.animation = 'glowred 1500ms infinite';
      document.getElementById("gameover").style.display = 'block';
    }


  }



function region(cont) {
  const pictures = document.getElementsByClassName("mySlides");
  var names = document.getElementsByName(cont);




  for (let i = 0; i < pictures.length; i++)
  {
    pictures[i].style.display = "none";
  }

  // You can do that, but you need to use the CSS.escape() function to ensure the value is properly encoded for use in a CSS expression.
  let window1 = slideshow1.querySelectorAll(`[name= ${CSS.escape(cont)}]`);
  let window2 = slideshow2.querySelectorAll(`[name= ${CSS.escape(cont)}]`);
  let window3 = slideshow3.querySelectorAll(`[name= ${CSS.escape(cont)}]`);



  window1[0].style.display = "block";

  window2[0].style.display = "block";

  window3[0].style.display = "block";









  // getElementsByClassName returns a live html collection. So when you alter index [0] it is dropped from the collection. So the item that was in [1] is not at [0].
  // You either loop backwards, you use a while loop, or use modern way with querySelectorAll

  while (pictures.length > 0)
  {

      pictures[0].className = "mySlides1";
  }



 for (let k = 0; k < names.length; k++)
  {

      names[k].className = "mySlides";

  }


}
