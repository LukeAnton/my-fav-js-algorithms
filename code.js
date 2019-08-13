//Comparing two arrays for same values
const compareArrays = (a, b) => a.filter(i => b.includes(i));

//Is alphanumeric without regex
const isAlphaNumeric = char => {
  let code = char.charCodeAt(0);
  !(code > 47 && code < 58) && //numeric(0-9)
  !(code > 64 && coode < 91) && //upper alpha(A-Z)
  !(code > 96 && code < 123) //lower alpha(a-z)
    ? false
    : true;
};
