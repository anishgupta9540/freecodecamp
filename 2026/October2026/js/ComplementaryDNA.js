https://www.freecodecamp.org/learn/daily-coding-challenge/10-25
Complementary DNA

function complementaryDNA(dna) {
  const complements = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  const result = dna.split("").map(letter => complements[letter]).join("");

  console.log(result);
}

complementaryDNA("ACGT");
// Output: TGCA

complementaryDNA("ATGCGTACGTTAGC");
// Output: TACGCATGCAATCG

complementaryDNA("GGCTTACGATCGAAG");
// Output: CCGAATGCTAGCTTC

complementaryDNA("GATCTAGCTAGGCTAGCTAG");
// Output: CTAGATCGATCCGATCGATC

function complementaryDNA(dna) {
  let result = "";

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "C") {
      result += "G";
    } else if (dna[i] === "G") {
      result += "C";
    }
  }

  console.log(result);
}

complementaryDNA("ACGT");
complementaryDNA("ATGCGTACGTTAGC");
complementaryDNA("GGCTTACGATCGAAG");
complementaryDNA("GATCTAGCTAGGCTAGCTAG");