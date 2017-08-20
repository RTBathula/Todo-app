
export const aminoAcidLettersAtPosition = (aminoAcidLetter, seqPosition, changeLetterTo, proteinSeqList) => {
  
	var isFound = false

	for(let i=0;i<proteinSeqList.length;++i){
		let seq = proteinSeqList[i].seq

		//Slice the sequence and get a letter at specified position
		let aminoAcidLetterAtPosition = seq.slice(seqPosition-1, seqPosition)
		let letterChangedAtPosition   = seq.slice(seqPosition, seqPosition+1)

		if(aminoAcidLetter === aminoAcidLetterAtPosition){	

			if(!changeLetterTo){
				isFound = true
				break
			}	

			if(changeLetterTo && changeLetterTo.length==1 && changeLetterTo === letterChangedAtPosition){
				isFound = true
				break
			}			
		}				
	}

	return isFound
}

