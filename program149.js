function sumFactors(iNo) {
  console.log("Factors of :", iNo);
  iSum = 0;
  for (let iCnt = 1; iCnt <= iNo / 2; iCnt++) {
    if (iNo % iCnt == 0) {
      iSum = iSum + iCnt;
    }
  }
  return iSum;
}

function main() {
  let iret = 0;
  iRet = sumFactors(12);
  console.log("Summation of factors:", iRet);
}
main();
