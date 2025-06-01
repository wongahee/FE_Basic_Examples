// JS 쿠키 사용자 정의 함수로 "쿠키 전체 삭제" 만들기

// 1. 쿠키 읽기
const getCookie = function() {
	// 로컬에 저장된 모든 쿠키 읽어오기
	const allCookies = document.cookie;
	console.log(allCookies);
	
	if(allCookies != '')
		alert('저장된 쿠키의 값은 : ' + allCookies);
	else
		alert('저장된 쿠키가 없습니다.');
}

// 2. 쿠키 생성하기
const setCookie = function(cname, cvalue, cexpire) {
    event.preventDefault();     // submit, href 이동 방지

    // 생성한 쿠키 값 체크
    if(document.getElementById('cname').value != "") {
        cname = document.getElementById('cname').value;
        cvalue = document.getElementById('cvalue').value;
        cexpire = document.getElementById('cexpire').value;
    }
    console.log('cname = ' + cname);
    console.log('cvalue = ' + cvalue);
    console.log('cexpire = ' + cexpire);    // String

    // 만료일 생성
    let expiration = new Date();
    console.log(expiration);
    expiration.setDate(expiration.getDate() + parseInt(cexpire));
    console.log(expiration);

    // 날짜로 쿠키로 저장
    console.log(expiration.toUTCString());

    let cookies = '';
    cookies += `${cname} = ${cvalue}; `;
    cookies += `expires = ${expiration.toUTCString()}`;
    console.log(cookies);

    document.cookie = cookies;
    // 초기화 방법 1)
    // document.getElementById('cname').value='';

    // 초기화 방법 2)
    document.getElementById('form').reset();

    document.getElementById('cname').focus();
    alert('쿠키를 생성하였습니다.');
    
}

// 3. 쿠키 삭제하기
const delCookie = function(cname) {
    // 방법 1)
    // document.cookie = 'userid=;expires=Sat, 01 Jan 1972 00:00:00 GMT';
    
    console.log(cname);

    // 방법 2) -setCookie 함수 활용
    // 단점: setCookie alert가 뜸
    setCookie(cname, "", 0);

    alert('쿠키를 삭제하였습니다.');
}

// 4. 모든 쿠키 삭제하기
const allDelCookies = function(domain, path) {
    domain = domain || document.domain,
    path = path || '/';

    const cookies = document.cookie.split('; ');
    const expiration = 'Sat, 01 Jan 1972 00:00:00 GMT';
    // console.log(cookies);
    // console.log(expiration);

    for(let i = 0; i < cookies.length; i++) {
        document.cookie = cookies[i].split('=')[0] + '=;expires=' + expiration;
        // document.cookie = cookies[i].split('=')[0] + '=;expires=' + expiration + ';domain=' + domain + ';path=' + path;
    }
    alert('쿠키를 모두 삭제하였습니다.');
}

// + 역순 삭제
// for(let i = cookies.length - 1; i >= 0; i--) { }


// setCookie
const form = document.getElementById('form');
form.addEventListener('submit', setCookie);
