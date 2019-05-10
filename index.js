'use strict';


function getDogImages() {
  let imageNumber = $('.numberOfImages').val();
  console.log('Showing number of images:' + imageNumber);
  fetch('https://dog.ceo/api/breeds/image/random/' + imageNumber)
    .then(response => response.json())
    .then(responseJson =>
        displayResults(responseJson))
    .catch(error => alert ('Something went wrong.'));
}

function displayResults(responseJson) {
  $('.results').empty();
  for (let i=0; i < responseJson.message.length; i++) {
    $('.results').append(
      `<img src="${responseJson.message[i]}" class="results-img">`
    )
  }
  $('.results').removeClass('hidden');
  console.log(responseJson.message);
  //console.log('https://cdn.pixabay.com/photo/2017/11/04/22/18/dog-2919014_640.jpg');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});