/** 12간지 구하기

const rawInput = prompt('태어난 해를 입력해 주세요.');
const year = Number(rawInput);
const birthAnimal = ['원숭이', '닭', '개', '돼지', '쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양'];

alert(`${ year }년에 태어났다면 ${birthAnimal[year % 12]}띠입니다.`);

 */

/** 윤년 구하기

const rawInput = prompt('연도를 입력해 주세요.');
const year = Number(rawInput);

alert(`${ year }년은 ${ (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? '윤년입니다.' : '윤년이 아닙니다.' }`);

 */

// 모래시계 별 찍기

for(let i = 0; i < 5; i ++) {
    document.write('*');
}

document.write('<br />');
document.write('<br />');

for(let i = 0; i < 5; i ++) {
    document.write('*');
    document.write('<br />');
}

document.write('<br />');
document.write('<br />');

for(let i = 0; i < 5; i ++) {
    for(let j = 0; j < 5; j ++) {
        document.write('*');
    }

    document.write('<br />');
}

document.write('<br />');
document.write('<br />');

for(let i = 0; i < 5; i ++) {
    for(let j = 0; j <= i; j ++) {
        document.write('*');
    }

    document.write('<br />');
}

document.write('<br />');
document.write('<br />');

for(let i = 0; i < 5; i ++) {
    for(let j = 5; j > i; j --) {
        document.write('*');
    }

    document.write('<br />');
}

document.write('<br />');
document.write('<br />');

for(let i = 0; i < 5; i ++) {
    for(let j = 0; j <= i; j ++) {
        document.write('&nbsp');
    }

    for(let j = 5; j > i; j --) {
        document.write('*');
    }

    document.write('<br />');
}

document.write('<br />');
document.write('<br />');

for(let i = 0; i < 5; i ++) {
    for(let j = 5; j > i; j --) {
        document.write('&nbsp');
    }

    for(let j = 0; j <= i; j ++) {
        document.write('*');
    }

    document.write('<br />');
}

document.write('<br />');
document.write('<br />');

let totalLine = 15;

for (let i = 1; i < totalLine; i ++) {
    for (let j = totalLine; j > i; j --) {
        document.write('&nbsp');
    }

    for (let k = 0; k < 2 * i - 1; k ++) {
        document.write('*');
    }

    document.write('<br />');
}

// 배열

const fruits = ['사과', '배', '바나나'];

console.log('바나나는 ' + fruits.indexOf('바나나') + '번째');

fruits.splice(1, 0, '감귤');

for (item in fruits) { // 배열의 index를 개별값으로 선언
    console.log(fruits[item] + ' 맛있다');
}

for (item of fruits) { // 배열의 요소 자체를 개별값으로 선언
    console.log(item);
}

for (let i = fruits.length - 1; i >= 0; i --) { // 역산되는 i = index 값을 통해 배열 거꾸로 출력
    console.log(fruits[i]);
}

function sumAll(a, b) {
    let output = 0;
    for (let i = a; i <= b; i ++) {
        output += i;
    }

    return output;
}

console.log(sumAll(1, 2000));