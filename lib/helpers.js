"use strict";

let helpers = {
  projRows: function(projects) {
    let rows = Math.floor(projects.length / 3);
    let stringHTML = "";
    let count = 0;
    let projNumPerRow = 3;

    for(let i = 0; i < rows; i++) {
      stringHTML += '<div class="row">';
      for(let j = 0; j < projNumPerRow; j++) {
        stringHTML +=
        '<div class="col-lg-4">'
        + `<a href="/project?id=${projects[count].id}">`
          + '<article class="project-box">'
            + `<img src=${projects[count].image} width="100%" />`
            + `<h3>${projects[count].title}</h3>`
            + `<p>${projects[count].shortDes}</p>`
          + '</article>'
          + '</a>'
        + '</div>';

        count++;
      }
      stringHTML += '</div>';
    }

    // Do we need to make another row? End early if not
    if(rows % projNumPerRow === 0){
      return stringHTML;
    }

    stringHTML += '<div class="row">';
    for(let j = 0; j < (rows % projNumPerRow); j++) {
      stringHTML +=
      '<div class="col-lg-4">'
      + `<a href="/project?id=${projects[count].id}">`
        + '<article class="project-box">'
          + `<img src=${projects[count].image} width="100%" />`
          + `<h3>${projects[count].title}</h3>`
          + `<p>${projects[count].shortDes}</p>`
        + '</article>'
        + '</a>'
      + '</div>';
      count++;
    }
    stringHTML += '</div>';

    return stringHTML;
  }

};

module.exports = helpers;
