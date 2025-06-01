window.onload =() => {
    // panel-faq-container
    const panelFaqContainer = document.querySelectorAll('.panel-faq-container');
    console.log(panelFaqContainer);     // NodeList 객체

    // panel-faq-answer
    let panelFaqAnswer = document.querySelectorAll('.panel-faq-answer');
    console.log(panelFaqAnswer);

    // btn-all-close
    const btnAllClose = document.getElementById('btn-all-close');
    console.log(btnAllClose);

    // FAQ 제목 클릭 시 콜백 처리
    for(let i= 0; i < panelFaqContainer.length; i++){
        panelFaqContainer[i].addEventListener('click', function() {
            // 클릭 시 처리할 일
            console.log('나 클릭..'+i);
            // console.log(panelFaqAnswer[i]);

            // FAQ 제목 클릭 시 본문 보이기 (active 클래스 추가)
            // this.classList.add('active');
            panelFaqAnswer[i].classList.add('active');
        });
    }
    btnAllClose.addEventListener('click', function() {
        console.log('모두닫기버튼 클릭');

        // 버튼 클릭 시 답변 닫히기
        for(let i = 0; i<panelFaqAnswer.length; i++){
            panelFaqAnswer[i].classList.remove('active');
        }
    });
}

