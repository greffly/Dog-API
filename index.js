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
  console.log(responseJson);
  for (let i=0; i < responseJson.message.length; i++) {
    $('.results').append(
      `<img src="${responseJson.message[i]}" class="results-img">`
    )
  }
  $('.results').removeClass('hidden');
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