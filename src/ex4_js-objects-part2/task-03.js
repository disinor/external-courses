function deleteSpace(stri) {
  const str = stri.split('');
  if (str[0] === " " && str[str.length -1]) {
    return str.slice(1,str.length-1).join('')
  }

  if (str[0] === " ") {
    return str.slice(1).join('')
  }

  if(str[str.length -1]=== ' '){
      return str.slice(0,str.length -1).join('')
  }

  return stri
}

module.exports = deleteSpace;
