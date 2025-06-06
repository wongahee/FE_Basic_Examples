// 브라우저 로컬데이터에 저장하기

// 🎈 주요 메서드 3개
// 값 저장하기: .setItem('key', value)
// 값 가져오기: .getItem('key')
// 값 삭제하기: .removeItem('key')
// key를 그대로 놓고 새로운 값을 저장하면 덮어쓰기 적용되면서 기존 로컬 데이터 정보가 수정됨.


window.onload = () => {
    // SetData 버튼
    const btnSLD = document.querySelector('.btnSetLocalData');
    console.log(btnSLD);

    // Input 텍스트 값
    const input = document.querySelector('input');

    // Set Data 버튼 클릭 시
    btnSLD.addEventListener('click', ()=> {
        // 입력 텍스트 값 가져오기
        const inputValue = input.value;
        console.log(inputValue);

        // localStorage에 저장하기
        localStorage.setItem('userid', inputValue);
        input.value ="";
    });

    // GetData 버튼
    const btnGLD = document.querySelector('.btnGetLocalData');
    console.log(btnGLD);

    // Get Data 버튼 클릭dd 시
    btnGLD.addEventListener('click', ()=> {
        // 해당 키(getItem 안 키 값)의 로컬 데이터가 존재하면, 가져오기
        const getData = localStorage.getItem('userid');

        if(!getData)
            alert('해당 키로 저장된 데이터가 로컬에 없습니다.');
        else
            input.value = getData;  // input text box에 삽입
    });

    // Remove 버튼
    const btnRLD = document.querySelector('.btnRemoveLocalData');
    
    // Remove 버튼 클릭 시 
    btnRLD.addEventListener('click', () => {
        // 해당 키의 로컬 데이터 삭제
        localStorage.removeItem('userid');
        // alert('삭제 완료!');
    });

}
