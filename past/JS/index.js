console.log('Hello Codeit!')
//주석
//자바스크립트에서는 ; 붙여도/안붙여도 됨

//변수
let coffee;
coffee=3000;
console.log(coffee*4)

// 함수 선언
function greetings() {
    console.log('Hi');
    console.log('안녕');
    console.log('こんにちは');
    console.log('你好');
    console.log('Guten Tag');
    console.log('Bonjour');
    console.log('Buongiorno');
};

//함수 호출
greetings();

//함수 + 파라미터
function greetings(sentence) {
    console.log(sentence);
};
greetings("Hello"+"안녕")

//함수 + return
function cal(n1,n2){
    return n1+n2;
}
console.log(cal(4,5));

//거듭제곱
console.log(2**2)

//문자열
console.log("He said \"shut up!\"") //방법1
console.log('He said "shut up!"') //2
console.log(`He said "shut up!"`) //3 (키보드 숫자 1 옆에 있는 `(백틱) 이용)

//boolean
console.log(2>1&&2===3)
console.log(2===3)
console.log(3>=3)
console.log(4!==5)
// && and
// || or
// ! not -> 중복이 가능하다. ex) !!true = true (이중 부정)

//typeof 연산자 : 어떤 자료형인지 알아내는 연산자
// 중복 사용 가능 ex) typeof typeof 3 -> 'string'으로 출력됨
console.log(typeof 1)
console.log(typeof '1')

//형변환
console.log(String(10)+String(10)) //숫자 -> 문자
console.log(Number('10')+Number('10')) //문자 -> 숫자

let x =true;
console.log(String(x)); //불린 -> 문자
console.log(Number(x)); //불린 -> 숫자 : true=1, false=0

let y='answer'
console.log(Boolean(y)); //문자 -> 불린 : true로 출력 (0이 아닌 수, 1)
let z='' //빈 문자열
console.log(Boolean(z)); //문자 -> 불린 : false로 출력 (0)
let q=NaN; //숫자가 아님을 의미하는... 그런 문자
console.log(Boolean(q)); //숫자 -> 불린 : false로 출력 (0)
//'', 0, NaN 만 boolean 형변환 했을 때 false로 나온다.
// -> 'falsy 값' 이라구 부름

 //자동 형변환이 아주 잘 됨.
 // + - * / % 중에서 + 만 조심하면 된다.
 // + 는 문자열 합병에도 사용되기 때문에, +를 만나면 자동으로 문자열로 형변환 가능


 // == 은 동등, === 은 일치
 // ..? 뭐가 다른 거지 ;;

 //템플릿 문자열
 let name='임현아'
 console.log('내 이름은 '+ name +'입니다.');

 //-> 템플릿 문자열 사용
 console.log(`내 이름은 ${name}입니다.`);
 //이러면 + 안써도 됨

//null & undefined -> 비교/구분
// null = 의도적으로 아무 값이 없음을 표현한 것.
//undefined = 아무런 조치를 안 취하면, 디폴트로 undefined 값으로 설정되어 있음.

//옵셔널 파라미터
function introduce(name,age=21){ //여기서 age가 옵셔널 파라미터
    console.log(`내 이름은 ${name}입니다. 나이는 ${age}이구요!`)
}
introduce('임현아');
//미리 값을 정해놓는 거! (입력이 안되면 이거 그대로 리턴됨)
//옵셔널 파라미터의 위치는 맨 뒤, 개수는 관계 없음


const pi=3.14; //상수(constant) -> 변하지 않고 유지, 값 변경 불가능
let radius=0; //변수 -> 변할 수 있음


//if문
if(10>5){
    console.log('true!')
    }
else{
    console.log('false!')
}

//switch case
let num=2;

switch(num){
    case 1:
        console.log('1번');
        break;
    case 2:
        console.log('2번');
        break;
    default:
        console.log('error');
}

//for문
for(let i=0;i<10;i++){
    console.log(i+1)
}

// process.stdout.write('hello') -> 개행 없이 출력하기

console.log('continue 알아보기')
for(let i=0;i<20;i++){
    if(i%2===0){
        continue; // 만약 if문이 성립하면, 이 continue로 밑의 console.log 명려을 건너뛰게 된당.
    }
    console.log(i);
}

//***자바스크립트는 모든 것이 객체다!! ***
//객체 object
let my_info={
    name: '임현아',
    birth: 2001,
    '2nd name': 'hyona',
    best:{
        title: '자바스크립트',
        score: 'A+'
    }
}
console.log(typeof(my_info)) //형=객체
console.log(typeof(my_info.name)) //형=문자열
//객체 출력
console.log(my_info) //객체 전체를 출력
console.log(my_info.name) //출력 방식 1 - 점 표기법
// -> ''로 둘러싸인 객체 변수는 참조할 수 없음
console.log(my_info['2nd name']) //출력 방식 2 - 대괄호 표기법
console.log(my_info.best.score)

//객체 수정, 삭제 ...
my_info.name='임현아 짱짱맨' //변수 수정
my_info.height=158 //새로운 변수 추가
my_info['3rd name']='Lim Hyon Ah'
delete my_info.birth
console.log(my_info.birth) //객체의 존재하지 않는 프로퍼티 값은 undefined로 출력됨. (에러 나지 않음!)

// in 연산자
console.log('name' in my_info) //불린 형태로 값이 출력됨
// 예를 들어, 이 코드에서는 true가 출력될 것임.
// 프로퍼티 값은 꼭 ''로 둘러싸줘야...
//-> if문에 활용 많이 한다

//객체의 메소드(함수) 
//함수의 이름 = 객체의 프로퍼티 이름
let greets={
    sayhi: function(name){
        console.log('hello '+name)
    },
    saybye: function(){
        console.log('bye')
    }
}
greets.sayhi('hyona')
greets.saybye

console.log('반복문!!')
//for...in 반복문 
for(let key in my_info){
    console.log(key)
}

//date 객체
let myDate=new Date() //현재 시간 반환
let pastDate=new Date('2001-08-24')//특정 시간 반환

console.log(myDate)
console.log(pastDate)

//getTime 메소드
//객체가 1970년 1월 1일 00:00:00 UTC로 부터 몇 밀리초가 지났는지 알려줌
// -> 이 정수값을 '타임 스탬프'라고 부른다.
let date=new Date(2021,11,27,21,25,16)
console.log(date.getTime())
// 이 외에도 다양한 메소드 존재
// date : 일, day : 요일(0:일요일 ~ 6:토요일)
// month : (0:1월 ~ 11:12월)
console.log(myDate.getDay()) //요일 출력
// -> 오늘은 토요일이니까 6이 출력됨.

//배열
let array=['임현아','현아','이묘나','묘나','2myona','LimHyonah']
console.log(array[1]) //인덱싱 : 배열의 인덱스에 접근하기
//배열도 객체이다!
console.log(typeof(array)) //object로 출력됨
console.log(array.length) //배열의 요소 개수 출력
console.log(array['length']) //대괄호 표기법 이용, 위랑 같은 역할의 코드

array[7]='myona'
console.log(array)
//이러면 6번 요소는 없는 상태, 그러면 그냥 empty라고 출력된다.
//에러는 나지 않음

//배열 수정, 삭제
array.splice(4) //4번 인덱스 이후의 모든 요소 삭제하기
array.splice(2,1) //4번 인덱스 이후로 1개의 요소만 삭제
console.log(array)
array.splice(1,1,'내가 다 삭제해버릴테다!')
//삭제 + 새로운 요소 추가하기
//삭제하고 그 위치에 새로운 요소가 추가됨
//-> 그 뒤의 요소들은 인덱스 숫자가 하나씩 밀리게 된다.
array.splice(0,0,21)
//삭제할 인덱스 수를 0으로 설정하면, 요소 추가가 가능
//내가 원하는 인덱스에 원하는 요소를 추가 가능
console.log(array)

//더 간단한거 
array.shift() //배열의 첫 요소 삭제
array.pop() //배열의 마지막 요소 삭제
array.unshift('임현아아') //배열의 첫 요소 추가
array.push('현아임') //배열의 마지막 요소 추가
console.log(array)

//for...of 반복문
for(let a of array){
    console.log(a)
}
//for...in도 가능하긴 한데... 흠 별로 안 추천
//for...in은 일반적으로 객체에 최적화된 형태
// -> for...of가 더 안전한 형태이다.

//다차원 배열
//배열 안에 또 배열이 있음
let twoarray=[[1],[1,2],[1,2,3]]
console.log(twoarray)
console.log(twoarray[1][1])

//다양한 숫자 표기법
let myNum=1e9 //10의 거듭제곱 표시
// e 오른쪽의 숫자만큼 10을 거듭제곱 -> 10의 9승
let sosu=9.1e-3 
//이건 소수를 의미 -> 10의 -3승
console.log(1000000000===myNum)
console.log(sosu===0.0091)
//이 외에도 2/8/16진법 가능

//숫자형 메소드 - toFixed
let number=0.3561
console.log(number.toFixed(3)) //소수점 세자리까지 표현
console.log(number.toFixed(7)) //부족한 소수점 자리수는 0으로 대체됨

//근데 이거 출력된 형태=문자열임!! 주의
console.log(typeof(number.toFixed(3)))

//그러면 Number 함수로 숫자형 형변환 해줘야 함.
console.log(Number(number.toFixed(3))) //이렇게
console.log(+number.toFixed(3)) //+로 Number 함수를 대체할 수 있음
//어떤 값 앞에 +를 붙여주면, Number 함수와 같은 역할을 해준다.
//-> 자바스크립트 전체에 적용됨

//숫자형 메소드 - toString(2~36)
let thisnum=255
console.log() //결과값은 문자열
console.log(thisnum.toString(2)) //2진수로 변환
console.log(thisnum.toString(16))
console.log(200..toString(16)) //정수로 바로 변환하는 법
//점 두개 써주기

//math객체
console.log(Math.random())
console.log(Math.sqrt(25)) //제곱근
console.log(Math.pow(2,3)) //2의 3승, 거듭 제곱
console.log(Math.max(2,5,8,100,20)) //최댓값을 출력해줌
// min도 존재
console.log(Math.abs(-5)) //절댓값

//문자열 심화
let string='안녕 내 이름은 임현아'
let str='   Hello this is me.   '
console.log(string.length)
console.log(string[5])
console.log(string.indexOf('이'))

console.log(str.toUpperCase()) //모두 대문자로 변환
console.log(str.trim()) //양 끝 공백 제거

console.log(str.slice(0,4)) //시작과 끝 인덱스
//-> 시작부터 ~ 끝 인덱스 바로 전까지 가져옴

//참조 때문에 객체 값 바꾸기가 힘듦.
//복사해주면 같은 주소값을 참조하게 되기 때문에
//그러면 이렇게 복사해주면 됨.
//->slice() 이용
let a=['milk']
let b=a.slice()
b.push('syrup')
console.log(a)
console.log(b)
let c=b.slice()
c.push('choco')
console.log(c)