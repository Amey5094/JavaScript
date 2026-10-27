function displayFactors(iNo) {
  console.log("Factors of :", iNo);
  for (let iCnt = 1; iCnt <= iNo / 2; iCnt++) {
    if (iNo % iCnt == 0) {
      console.log(iCnt);
    }
  }
}

function main() {
  displayFactors(12);
}
main();
