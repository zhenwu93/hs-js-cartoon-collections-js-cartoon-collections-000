function dwarfRollCall(dwarves) {
  var names = "";

    for (var i = 0; i < dwarves.length; i++) {
      var dwarf = dwarves[i];
      var indexCount = i + 1;
      names += indexCount + '. ' + dwarf + ' ';
    }

    return names;
}

function summonCaptainPlanet(planeteerCalls) {
  var eleArr = [];

  for (var i = 0 ; i < planeteerCalls.length; i++) {
    var element = planeteerCalls[i];
    eleArr.push(element.toUpperCase() + '!');
  }

  return eleArr;
}

function longPlaneteerCalls(words) {

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > 4) {
      return true;
    }
  }

  return false;
}

function findTheCheese (foods) {

  for (var i = 0; i < foods.length; i++) {

    var food = foods[i];
    if (food === 'cheddar' || food === 'gouda' || food === 'camembert') {
      return food;
<<<<<<< HEAD
    }
  }

  return 'no cheese!';
=======
    } else {
      return 'no cheese!';
    }
  }
>>>>>>> 5723528f5c9cce2dc53a2875b40b82543807fb73
}
