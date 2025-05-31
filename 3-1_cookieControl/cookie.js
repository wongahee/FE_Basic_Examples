// Reading, creating, and deleting cookies in JavaScript
// 자바스크립트로 쿠키 읽기, 생성하기, 삭제하기

// basic methods (기본적인 방법)
// document.cookie ="name=???; name2=???; expire =???; path=???";

// How to check cookies in Developer Tools (쿠키 확인 방법)
// "F12" in browser - Application - Storage - Cookies

// 1) Reading cookies (쿠키 읽기)
function getCookie() {
    // Display cookies stored locally (로컬에 저장된 쿠키 뿌려주기)
    const allCookies = document.cookie;     // Return as a string (문자열로 리턴)
    console.log(typeof allCookies);

    if(allCookies != '')
        alert("저장된 쿠키의 값은: "+ allCookies + "\n(재방문을 환영합니다.)");
    else
        alert('저장된 쿠키가 없습니다. \n(첫 방문을 환영합니다.)');
}

// 2) Creating cookies (쿠키 생성)
function setCookie() {
    // Set expiration date (만료일 설정하기)
    /* 
    let nowData = new Date();
    console.log(nowData);

    let expiration = nowData.getDate() + 10;
    console.log(expiration);        // 날짜만 숫자로 출력
    */

    let expiration = new Date();
    expiration.setDate(expiration.getDate() + 7);
    console.log(expiration);

    // UTC 방식 저장 - toUTCString() method
    console.log(expiration.toUTCString());

    // 생성
    let cookies = '';
    cookies = 'userid=superman; expires=' + expiration.toUTCString();
    console.log(cookies);

    // Save cookie (쿠키 저장하기)
    document.cookie = cookies;
    alert('쿠키를 생성하였습니다.');
}

// 3) Deleting cookies (쿠키 삭제 ≒ 수정)
function delCookie() {
    // 만료 시간을 입력하여 쿠키 삭제
    // document.cookie ='username=hongkildong';
    // document.cookie ='username=leesoonsin';   // 쿠키 수정
    // document.cookie ='username=;expires=Sat, 01 Jan 1972 00:00:00 GMT';
    document.cookie ='userid=; expires=Sat, 01 Jan 1972 00:00:00 GMT';
    alert('쿠키를 삭제하였습니다.');
}

// Summary
/* 
    * 쿠키 사용법
    - JS 함수 생성 
    - JS 쿠키 경량 라이브러리 사용
    - document.cookie 사용
    - 지난 날짜를 입력하여 쿠키 삭제
    - Set, Get, Del 함수
*/