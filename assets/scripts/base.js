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

for(let i = 0; i <= 5; i ++) {
    for(let j = 0; j < i; j ++) {
        document.write('*');
    }

    document.write('<br />');
}

document.write('<br />');
document.write('<br />');