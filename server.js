'use strict';

function startBurger(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(string);
    }, 400);
  });
}

function addCheese(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(string + ' WITH CHEESE!!!');
    }, 400);
  });
}

function addPickles(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(string + ' AND PICKLES!!!');
    }, 400);
  });
}

function addMustard(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(string + ' AND MUSTARD!!!');
    }, 400);
  });
}

async function createBurger(string) {
  const start = await startBurger(string);
  const withCheese = await addCheese(start);
  const withPickles = await addPickles(withCheese);
  const withMustard = await addMustard(withPickles);
  console.log(withMustard);
}

console.log('making burger...');
createString('plain burger');
