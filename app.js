// computeAverageLengthOfWords

function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length) / 2;
}

// getNthElement

function getNthElement(array, n) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[n];
  }
}

// convertDoubleSpaceToSingle

function convertDoubleSpaceToSingle(str) {
  let str2 = str.split("  ");
  let strNew = str2.join(" ");
  return strNew;
}

// areValidCredentials

function areValidCredentials(name, password) {
  if (name.length > 3 && password.length > 8) {
    return true;
  } else {
    return false;
  }
}

// filterOddElements

function filterOddElements(arr) {
  let impares = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      impares.push(arr[i]);
    }
  }
  return impares;
}

// computeSumOfAllElements

function computeSumOfAllElements(arr) {
  let result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

// computeSumOfAllElements

function computeSumOfAllElements(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

// getLongestOfThreeWords

function getLongestOfThreeWords(word1, word2, word3) {
  if (word1.length >= word2.length && word1.length >= word3.length) {
    return word1;
  } else if (word2.length >= word1.length && word2.length >= word3.length) {
    return word2;
  } else {
    return word3;
  }
}

// findShortestOfThreeWords

function findShortestOfThreeWords(word1, word2, word3) {
  if (word1.length <= word2.length && word1.length <= word3.length) {
    return word1;
  } else if (word2.length <= word1.length && word2.length <= word3.length) {
    return word2;
  } else {
    return word3;
  }
}

//convertScoreToGrade

function convertScoreToGrade(score) {
  if (score <= 100 && score >= 90) {
    return "A";
  } else if (score <= 89 && score >= 80) {
    return "B";
  } else if (score <= 79 && score >= 70) {
    return "C";
  } else if (score <= 69 && score >= 60) {
    return "D";
  } else if (score <= 59 && score >= 0) {
    return "F";
  } else {
    return 'PUNTUACION INVALIDA';
  }

}