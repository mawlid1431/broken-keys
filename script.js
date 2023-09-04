// Good Luck 💪🏾


function brokenKeys(correctPhrase, typedPhrase) {
  const brokenKeysArray = [];

  for (let i = 0; i < correctPhrase.length; i++) {
    if (correctPhrase[i] !== typedPhrase[i]) {
      if (!brokenKeysArray.includes(correctPhrase[i])) {
        brokenKeysArray.push(correctPhrase[i]);
      }
    }
  }

  return brokenKeysArray;
}

// Example usages:
console.log(brokenKeys("fikrcamp bootcamp", "fikrcomp boorcamp")); // Output: ["a", "t"]
console.log(brokenKeys("good night", "gppd night")); // Output: ["o"]

