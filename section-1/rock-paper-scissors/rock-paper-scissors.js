
function whoWins(first, second) {
  if (first === 'rock' && second === 'scissors') {
    return 'first';
  }

  if  (first === 'scissors' && second === 'rock') {
    return 'second';
  }

  if (first === 'paper' && second === 'rock') {
    return 'first';
  }

  if (first === 'rock' && second === 'paper') {
    return 'second';
  }

  if (first === 'scissors' && second === 'paper') {
    return 'first';
  }

  if (first === 'paper' && second === 'scissors') {
    return 'second';
  }

  if (first === second) {
    return 'tie';
  }


}
