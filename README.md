# 정규표현식(RegExp)

정규식, Reqular Expression

## 역할

- 문자 검색 (search)
- 문자 대체 (replace)
- 문자 추출 (extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성

```js
// 생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

// 리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자

```js
const str = `
010-1234-5978
thedmndf@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부 (Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열 (Array) 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

## 플래그

플래그 | 설명
--|--
g | 모든 문자 일치 여부 검사 (global)
i | 영어 대소문자를 구분 않고 일치 여부 검사 (ignore case)
m | 여러 줄 일치 여부 검사 (각각의 줄을 시작과 끝으로 간주해서 검사함) (multi line)

## 패턴 (표현)

패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab(단어)와 일치 여부 검사
ab$ | 줄(Line) 끝에 있는 ab(단어)와 일치 여부 검사 
. | 임의의 한 문자와 일치 여부 검사 (아무글자나 대입해서 일치하는것을 다 가져옴 ex) /h..p/ => 결과 : http)
a&verbar;b | a 또는 b 와 일치 여부 검사 (옵션 g가 있으면 일치할 시 다 가지고 옴, 없으면 먼저 찾아진 것만 가지고 옴)
ab? | b 가 없거나 b 와 일치 여부 검사(ex) /https?/g 결과 => http 혹은 https)
{3} | 3개 연속 일치
{3, } | 3개 이상 연속 일치
{3, 5} | 3개 이상 5개 이하(3~5개) 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | a 부터 z 사이의 문자 구간에 일치 (영어 소문자)
[A-Z] | A 부터 Z 사이의 문자 구간에 일치 (영어 대문자)
[0-9] | 0 부터 9 사이의 문자 구간에 일치 (숫자)
[가-힣] | 가 부터 힣 사이의 문자 구간에 일치 (한글)
\w | 63개 문자(Word, 대소영문52개 + 숫자10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(경계를 지정하는 느낌)(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab 등)에 일치
(?=) | 앞쪽 일치 (일치 부분의 앞을 가지고 옴) (Lookahead)
(?<=) | 뒤쪽 일치 (일치 부분의 뒤를 가지고 옴) (Lookahead)
