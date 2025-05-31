// 테이블의 열과 행 동적 생성으로 삽입하기

window.onload = () => {
    // 행&열 추가 버튼 생성
    const btnCrc = document.querySelector('.btnCrc');
    console.log(btnCrc);

    // 클릭 시 데이터 생성
    btnCrc.addEventListener('click', () => {
        let hTbody = document.getElementById('htmlTbody');
        console.log(hTbody);

        // 1) 테이블 마지막 요소에 1행 추가
        const newRow0 = hTbody.insertRow();

        // 2) 테이블에 마지막 요소에 1행 추가
        const newCell0 = newRow0.insertCell();
        const newCell1 = newRow0.insertCell();
        const newCell2 = newRow0.insertCell();
        const newCell3 = newRow0.insertCell();

        // 텍스트 노드를 새 Cell에 붙이기
        const newText0 = document.createTextNode('홍길동');
        newCell0.appendChild(newText0);

        const newText1 = document.createTextNode('hong@hong.com');
        newCell1.appendChild(newText1);

        const newText2 = document.createTextNode('25');
        newCell2.appendChild(newText2);

        const newText3 = document.createTextNode('영화보기');
        newCell3.appendChild(newText3);

        // 테이블 Row 구하기
        const table = document.getElementById('myTable');
        // console.log(table.rows.length - 1);     // -1 : 컬럼명 제외
        // console.log(table.rows[0]);     // 첫 행의 값
        // console.log(table.rows[1]);

        // Cell 갯수 구하기
        const r = table.rows.length - 1;
        const l = table.rows[r].cells.length;
        console.log(l);
        console.log('테이블 row 갯수는 ' + r +'개');

        // 각 Cell의 정보값 세팅하기
        // thead 첫 행(컬럼명)은 table.rows[0]
        // tbody의 첫 행은 hTbody.rows[0]
        for(let c = 0; c < l; c++) {    
            // hTbody.rows[r-1].cells[c].innerHTML = `Data ${c}`;
            hTbody.rows[r-1].cells[c].innerHTML = `[${r-1}][${c}]`;
        }
    });
}