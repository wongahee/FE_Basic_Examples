🚀 Frontend Practice Projects
================================
[교육명] 프론트엔드 개발시 꼭 해봐야하는 실무 예제 Part.1

<br><br>

## 📋 프로젝트 개요
웹 브라우저의 **데이터 저장, 동적 UI, 사용자 인터랙션** 등 프론트엔드 핵심 기능들을 학습하며 직접 구현한 프로젝트입니다.

<br>

## 🛠 기술 스택

### Frontend
- HTML5, CSS3, JavaScript (ES6)

### UI Framework
- Bootstrap 4.6.0

<br>

## 🎯 프로젝트 목록
| No | Project | Path | Description |
|------|--------------------|-----------|------|
| 1 | 🎵 Accordion FAQ Menu | [🔗 보기](./1-accordion-FAQ-menu) | Practice on Accordion UI |
| 2 | 💾 LocalStorage Basic Operations | [🔗 보기](./2-localStorage-basic-operations) | Practice on Local Storage : Save, Load, Delete |
| 3 | 📊 LocalStorage Data Visualization | [🔗 보기](./3-localStorage-viewer) | Practice on LocalStorage Table Viewer |
| 4 | 🔧 Dynamic Table Generation | [🔗 보기](./4-localStorage-addRowColumn) | Practice on Create Row and column Local Storage |
| 5 | 🍪 Cookie Management System | [🔗 보기](./5-cookieControl) | Practice on Cookie Management |
| 6 | 🍪 Advanced Cookie System | [🔗 보기](./6-cookieControl-delete-all) | Practice on Advanced Cookie Management |

<br>

### 1. 🎵 Accordion FAQ Menu

✅ UI 인터랙션 기능

- 전체 아코디언 바 닫기 버튼 생성
- 클릭으로 FAQ 내용 토글
- hover, click 시 부드러운 CSS 애니메이션 적용
- NodeList 객체와 반복문 활용

<br>
<caption>Main FAQ page</caption>

![1_1](./images/1_1.JPG)

<br>

<caption>아코디언 바 닫기</caption>

![1_2](./images/1_2.JPG)
- FAQ Title 클릭 시 아코디언 바 아래로 열림
- Close Button을 통한 아코디언 바 닫기
<br>

### 2. 💾 LocalStorage Basic Operations

✅ 기본 기능

- 데이터 저장/조회/삭제
- 실시간 입력값 처리

<br>
<caption>Main LocalStorage Management page</caption>

![2_1](./images/2_1.JPG)

<br>
<caption>로컬스토리지 저장</caption>

![2_2](./images/2_2.png)
- input box에 로컬스토리지 값 입력 후 Set Data 버튼 클릭 (저장하기)
- Get Data 버튼 클릭 시 input box에 값 출력 (가져오기)
- Remove 버튼 클릭 시 로컬스토리지 삭제됨 (삭제하기)

<br>

### 3. 📊 LocalStorage Data Visualization

✅ 고급 기능

- 저장된 모든 데이터 테이블 형태로 출력
- Key-Value 쌍 동적 렌더링
- 배열 데이터 처리 및 반복문 활용

<br>
<caption>Main LocalStorage View page</caption>

![3_1](./images/3_1.JPG)

<br>
<caption>로컬스토리지 데이터 확인</caption>

![3_2](./images/3_2.png)

- localStorage Data All View 버튼 클릭 시 저장된 로컬스토리지 쌍 출력

<br>

### 4. 🔧 Dynamic Table Generation

✅ 주요 기능

- 실시간 행/열 추가
- insertRow(), insertCell() 메서드 활용
- 텍스트 노드 생성 및 삽입

<br>
<caption>Main localStorage page</caption>

![4_1](./images/4_1.JPG)

<br>
<caption>행과 열 칸에 데이터 넣기</caption>

![4_3](./images/4_3.png)

- 저장한 데이터 값 출력
<br>
<caption>+) 행열 번호 출력</caption>

![4_2](./images/4_2.png)

<br>

### 5. 🍪 Cookie Management System

✅ 주요 기능

* 쿠키 생성/읽기/삭제 기본 기능
* 7일 만료 기간 자동 설정
* 첫 방문자/재방문자 구분 메시지
* UTC 시간 형식 활용

<br>
<caption>Main Cookie Control page</caption>

![5_1](./images/5_1.JPG)

<br>
<caption>쿠키 확인</caption>

![5_2](./images/5_2.png)

- 첫 방문하여 쿠키 값이 없을 때 알림
- 쿠키 값이 비어있음을 확인
  
<br>
<caption>쿠키 생성</caption>

![5_3](./images/5_3.png)

- Set Cookie 버튼 클릭하여 프로그래밍한 쿠키 데이터 입력
- 쿠키 값 생성 확인

<br>
<caption>쿠키 생성 후 재확인</caption>

![5_4](./images/5_4.png)

- 생성된 쿠키 값 확인 알림

<br>
<caption>쿠키 삭제</caption>

![5_5](./images/5_5.png)

- Del Cookie 버튼 클릭하여 쿠키 삭제
- 쿠키 값 삭제 확인

<br>

### 6. 🍪 Advanced Cookie System

✅ 고급 기능

- 사용자 정의 쿠키 생성 (이름, 값, 만료일 입력)
- 개별 쿠키 삭제
- 전체 쿠키 일괄 삭제 기능
- Form 데이터 검증 및 초기화

<br>
<caption>Main Cookie page</caption>

![6_1](./images/6_1.JPG)

<br>
<caption>쿠키 확인</caption>

![6_2](./images/6_2.png)

- 쿠키 값이 비어있음을 확인

<br>
<caption>쿠키 생성</caption>

![6_3](./images/6_3.png)

- 원하는 쿠키 이름/값/만료일 작성 후 쿠키 생성

<br>
<caption>쿠키 재확인</caption>

![6_4](./images/6_4.png)

- 쿠키 생성 후 재확인

<br>
<caption>쿠키 전체 삭제</caption>

![6_5](./images/6_5.JPG)

- 저장된 모든 쿠키 삭제

<br>

## 👤 개발자 노트
프론트엔드 개발 학습으로 브라우저 API부터 동적 UI까지 단계적 학습 완료

