// 로컬 스토리지 데이터 값들 출력하기

window.onload = () => {
    // (키, 값) 모두보기 버튼
    const btnAllView = document.querySelector('.btnAllView');
    console.log(btnAllView);

    // 모두보기 버튼 클릭 시
    btnAllView.addEventListener('click', ()=> {
        // 1) 키, 값, 갯수 등 확인하기
        // 로컬 스토리지 데이터 값(Value) 출력하기
        const getData = localStorage.getItem('background-color');
        console.log(getData);

        // 로컬 스토리지 데이터 키(Key) 출력하기
        console.log(localStorage.key(0));
        console.log(localStorage.key(1));
        console.log(localStorage.key(2));
        console.log(localStorage.key(3));
        console.log(localStorage.key(4));

        // 키(Key)의 갯수 출력하기
        console.log(localStorage.length);
      /* 
        // 2) 배열 정보를 동적으로 테이블 생성 후 tbody에 삽입하기
        let ar = new Array();
        let result ="";

        ar.push({name:'홍길동', email:'hong@google.com', age:23, pastime:'음악감상'});
        ar.push({name:'이순신', email:'lee@google.com', age:21, pastime:'수영'});
        ar.push({name:'강감찬', email:'kang@google.com', age:19, pastime:'걷기'});
        ar.push({name:'김유신', email:'kim@google.com', age:22, pastime:'야식먹기'});
        ar.push({name:'광개토', email:'kwang@google.com', age:25, pastime:'독서'});

        console.log(ar[0].name);    // 홍길동
        console.log(ar[0].email);   // hong@google.com
        console.log(ar[0].age);     // 23
        console.log(ar[0].pastime); // 음악감상

        // 배열 정보를 result 변수에 누적
        for(const i in ar){
          // console.log(i);
          result += "<tr>";
          result += "<td>" + ar[i].name + "</td>";
          result += "<td>" + ar[i].email + "</td>";
          result += "<td>" + ar[i].age + "</td>";
          result += "<td>" + ar[i].pastime + "</td>";
          result += "</tr>";
        }
        // console.log(result);

         const hTbody = document.getElementById('htmlTbody');
         console.log(hTbody);

        // 비우고 추가
        // $('#htmlTbody').empty();
        // $('#htmlTbody').append(result);

        // Append - JS
        // 방법 1) hTbody.append(result);      // 텍스트 문자열 형태로 Append됨
        //         hTbody.innerText = result;
        // 방법 2) hTbody.appendChild(result); // Node 관련 error 발생
        // 방법 3) hTbody.innerText(result);   // 괄호 x
        hTbody.innerHTML = result;
      */
     // -----------------------------------------------------------------------------
     /*
     // 결과 출력
     let result="";
     result += "<tr>";
     result += "<td class='align-middle' width='30%'>" + localStorage.key(0) + "</td>";
     result += "<td class='align-middle'>" + localStorage.getItem(localStorage.key(0)) + "</td>";
     result += "<td><button class='btnRemove btn'>Remove</button></td>";
     result += "</tr>";
     console.log(result);

     const hTbody = document.getElementById('htmlTbody');
     hTbody.innerHTML = result;
     */

     // -----------------------------------------------------------------------------
     // 키 순회하며 key:value 값들 출력하기
     console.log('로컬 스토리지 길이='+ localStorage.length);

     let ar = new Array();
     let result2 ='';
     
     for(let i=0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      console.log(`${key}:${localStorage.getItem(key)}`);

      // 결과 변수
      result2 += "<tr>";
      result2 += "<td class='align-middle' width='30%'>" + key + "</td>";
      result2 += "<td class='align-middle'>" + localStorage.getItem(key) + "</td>";
      result2 += "</tr>";

      // 배열에 저장
      ar.push(result2);
     }
     console.log(ar);

     // 붙이기
     $('#htmlTbody').empty();
     $('#htmlTbody').append(result2);
    });
}
