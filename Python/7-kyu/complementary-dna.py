def DNA_strand(dna):
  result = []
  strand = {
      'A':'T',
      'T':'A',
      'G':'C',
      'C':'G'
  }

  for letter in dna: result.append(strand[letter])
  return "".join(result)

DNA_strand('GTAACTA')