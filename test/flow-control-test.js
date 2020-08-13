const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')

describe('flow-control', () => {

  before(done => {
    const src = path.resolve(__dirname, '..', 'flow-control.js')

    jsdom.env('<div></div>', [src], (err, window) => {
      if (err) {
        return done(err)
      }

      Object.keys(window).forEach(key => {
        global[key] = window[key]
      })

      return done()
    })
  })

  describe('basicTeenager', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(basicTeenager(13)).toEqual("You are a teenager!");
    })

    it('should return undefined if the age is not between 13-19', () => {
      expect(basicTeenager(12)).toBe(undefined)
    })

  })

  describe('teenager', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(teenager(13)).toEqual("You are a teenager!")
    })

    it('should return "You are not a teenager" if the age is not between 13-19', () => {
      expect(teenager(12)).toEqual("You are not a teenager")
      expect(teenager(29)).toEqual("You are not a teenager")
    })
  })

  describe('ageChecker', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(ageChecker(13)).toEqual("You are a teenager!")
    })

    it('should return "You are a kid" if the age is 12 or below', () => {
      expect(ageChecker(12)).toEqual("You are a kid")
    })

    it('should return "You are a grownup" if the age is 20 or above', () => {
      expect(ageChecker(29)).toEqual("You are a grownup")
    })
  })

  describe('ternaryTeenager', () => {
    it('should return "You are a teenager" if age is between 13-19', () => {
      expect(ternaryTeenager(15)).toEqual("You are a teenager")
    })

    it('should return "You are not a teenager" if age not between 13-19', () => {
      expect(ternaryTeenager(75)).toEqual("You are not a teenager")
    })
  })

  describe('switchAge', () => {
    it('should return "You are a teenager" if age is between 13-19', () => {
      expect(switchAge(15)).toEqual("You are a teenager")
    })

    it('should return "You have an age" if age not between 13-19', () => {
      expect(switchAge(75)).toEqual("You have an age")
      expect(switchAge(7)).toEqual("You have an age")
    })
  })
})

function basicTeenager(age) {
  String answ = "You are a teenager!";
  if(age >= 13 && age <= 19){
    return answ;
  }else{
    return undefined;
  }
}

function teenager(age) {
  String answ = "You are a teenager!";
  String elseans = "You are not a teenager";
  if(age >= 13 && age <= 19){
    return answ;
  }else{
    return elseans;
  }
}

function ageChecker(age) {
  String answ = "You are a teenager!";
  String elseifans = "You are a kid";
  String elseans = "You are a grownup";
  if(age >= 13 && age <= 19){
    return answ;
  }else if(age <= 12){
    return elseifans;
  }else{
    return elseans;
  }
}

function ternaryTeenager(age) {
  String answ = "You are a teenager!";
  String elseans = "You are not a teenager";
  return age >= 13 && age <= 19 ? return answ: return elseans)
}

function switchAge(age) {
  String ans = "You are a teenager";
  String def = "You have an age";
  switch(age) {
    case 13:
      return ans;
      break;
    case 14:
      return ans;
      break;
    case 15:
      return ans;
      break;
    case 16:
      return ans;
      break;
    case 17:
      return ans;
      break;
    case 18:
      return ans;
      break;
    default:
      return def;
  }
}
