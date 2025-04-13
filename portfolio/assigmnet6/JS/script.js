const parallax = document.getElementById
("parallax")

window.addEventListener("scroll", function ()
	{
		let offset = window.pageYOffset;
		parallax.style.backgroundPositionY = offset
		* 0.8 + "px" ;
	})


   
 const paragraph = document.getElementById('myParagraph');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        paragraph.classList.add('active');
      } else {
        paragraph.classList.remove('active'); // optional: remove color when scrolled away
      }
    });
  }, {
    threshold: 0.4 // 50% of the element must be visible
  });

  observer.observe(paragraph);





