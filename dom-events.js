function domEvents() {

  const searchTerm = document.getElementsByName('searchbox')[0];

  function formSubmit() {
    return addEventListener('submit', function(e){
      e.preventDefault();
      console.log('Horray! Someone wrote "' + searchTerm.value + '"!');
      console.log('submit');
    });
  }



  return {
    formSubmit
  };

}
