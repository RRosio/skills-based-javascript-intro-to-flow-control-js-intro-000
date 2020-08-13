function basicTeenager(age) {
  var answ = "You are a teenager!";
  if(age >= 13 && age <= 19){
    return answ;
  }else{
    return undefined;
  }
}

function teenager(age) {
  var answ = "You are a teenager!";
  var elseans = "You are not a teenager";
  if(age >= 13 && age <= 19){
    return answ;
  }else{
    return elseans;
  }
}

function ageChecker(age) {
  var answ = "You are a teenager!";
  var elseifans = "You are a kid";
  var elseans = "You are a grownup";
  if(age >= 13 && age <= 19){
    return answ;
  }else if(age <= 12){
    return elseifans;
  }else{
    return elseans;
  }
}

function ternaryTeenager(age) {
  var answ = "You are a teenager!";
  var elseans = "You are not a teenager";
  return (age >= 13 && age <= 19 ? return answ: return elseans)
}

function switchAge(age) {
  var ans = "You are a teenager";
  var def = "You have an age";
  switch(age) {
    case 13:
      return ans;
    case 14:
      return ans;
    case 15:
      return ans;
    case 16:
      return ans;
    case 17:
      return ans;
    case 18:
      return ans;
    default:
      return def;
  }
}
