function scramble(str1, str2) {
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arr2.splice(arr2.indexOf(arr1[i]), 1);
      if (arr2.length === 0) return true;
      if (!arr2.includes(arr1[i])) {
        
      }
    }
  }
  return false;
}

function scramble(str1, str2) {
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();
  console.log(arr1)
  console.log(arr2)
  if (arr1.length < arr2.length) return false;
  
  for (let l of arr2) {
    let i = arr1.indexOf(l);
    if (i === -1) return false;
    arr1.splice(i, 1);
  }
  return true;
}
