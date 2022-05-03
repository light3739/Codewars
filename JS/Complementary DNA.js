function DNAStrand(dna) {
    let s="" ;
    let i=0;
        for (let i = 0; i < dna.length; i++) {
            if (dna[i] === "A") {
                 s+=("T");
            }
            if (dna[i] === "T") {
                s+=("A");
            }
            if (dna[i] === "G") {
                s+=("C");
            }
            if (dna[i] === "C") {
                s+=("G");
            }
        }

        return s;
    }