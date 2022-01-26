let str = `
010-1234-5978
thedmndf@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/h..p/g)
);

console.log(
  str.match(/d{2}/)
);

console.log(
  str.match(/\b\w{2, 3}\b/)
);

console.log(
  str.match(/[0-9]{1,}/g)
);

// 소문자 f 로 시작하는 영단어 찾기
console.log(
  str.match(/\bf\w{1,}\b/g)
);

const h = `  the hello  world   !

`
// 공백 제거
console.log(
  h.replace(/\s/g, '')
);

// 이메일 주소 @ 기준 앞 가지고 오기
console.log(
  str.match(/.{1,}(?=@)/g)
);


// 이메일 주소 @ 기준 뒤 가지고 오기
console.log(
  str.match(/(?<=@).{1,}/g)
);
