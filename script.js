// Mad lib with javascrpt by Mr.v

// event listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadlib);

// event function
function buildMadlib() {
  // input
  //   let pluralNoun = prompt("Enter a plural noun:");
  //   let adjective = prompt("Enter a adjective:");
  //   let verb = prompt("Enter a verb:");
  //   let noun = prompt("Enter a noun:");

  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let city = document.getElementById("city").value;
  let name = document.getElementById("name").value;
  // process
  let result =
    `"  There are too many   ` +
    pluralNoun +
    `  on this   ` +
    adjective +
    `  airplane  ", I screamed."Somebody has to   ` +
    verb +
    `   on the   ` +
    noun +
    `  to solve this problem. Before we reach   ` +
    city +
    `  and we meet   ` +
    name +
    `   in the house.    "`;

  // /output
  document.getElementById("result").innerHTML = result;
}

// /output
//   alert(result);
// }
