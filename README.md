# 👀 인스타그램 클론코딩 (Front-End)
![](img.png)

>**인스타그램 클론코딩**

<br />   

노션 뷰 : https://upbeat-scarecrow-b6f.notion.site/99-1-7fb046c796f34f32adc82c3454a3dfed

---

🧑🏻‍💻 팀원소개
---
5인 1조 팀프로젝트(Back-End: 3명, Front-End: 2명)
### [BACK_END] 
🧑🏻‍💻 [박재균](https://github.com/JaeGyoon/) <br/>

-  로그인/회원가입 구현, JWT 인증, 마이페이지 구현

🧑🏻‍💻 [이규진](https://github.com/Dean404) <br/>

- 게시글 및 댓글 CRUD 구현, 이미지 업로드 구현

🧑🏻‍💻 [문병민](https://github.com/qudalsrnt3x) <br/> 

- 프로젝트 셋팅 및 배포(AWS), 예외처리 <br/>

#### [\[Back-End Github\]](https://github.com/qudalsrnt3x/instagram-clone-coding)

### [FRONT-END] 
🧑🏻‍💻 [차민재](https://github.com/letminjae) <br/>

- 메인 + 모달 페이지 뷰 작성, DM 뷰 작성(기능 추후 구현 예정), 게시글 및 댓글 CRUD 구현, 이미지 업로드, 배포(AMAZON S3) <br/>

🧑🏻‍💻 [한동윤](https://github.com/dongyunh) <br/>

- 로그인 + 회원가입 뷰 작성, 마이페이지 뷰 작성, JWT토큰을 통한 회원가입 및 로그인 기능 구현, 마이페이지 유저가 올린 게시물 조회 기능 구현 <br/>

## 🗓 스케줄링
#### 2022년 02월 18일 ~ 2022년 02월 24일

- 02/11(금) : 프로젝트 주제 선정, 와이어프레임 및 API 작성, DB 모델링
- 02/12(토) : 로그인, 회원가입 구현, API 구현
- 02/14(월) : 1차 배포, 프론트와 로그인 연결, 업로드 구현
- 02/15(화) : 마이페이지 구현, 댓글 구현
- 02/16(수) : 마이페이지 연결, 오류 수정
- 02/17(목) : 코드 리팩토링 및 최종 배포

<br />

## ⚙️ 기술 스택

### Back-End

<div>
  <img src="https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=java&logoColor=white">
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">
  <img src="https://img.shields.io/badge/Springboot-6DB33F?style=for-the-badge&logo=Springboot&logoColor=white">
  <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black">
  <img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

</div>  

### Front-End

<div>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=black">
  <img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">  

</div>

### Version Control
![](img_1.png)![](img2.png)


<br />


 🔑 기능 설명
---
### 1) 회원가입/로그인

- JWT인증 방식으로 로그인 구현
- ID 중복확인, 각 필드별 유효성 체크

### 2) 게시글 CRUD

- 게시글 목록 전체 조회, 상세조회, 등록, 삭제
- 이미지 업로드, 삭제, 수정

### 3) 댓글 CRUD

- 댓글 등록, 조회, 삭제

<br />

❓ 트러블 슈팅
---
### 1) formdata형태의 이미지를 서버로 post 했을 때 400 에러가 뜨는 문제

- JSON 형식처럼 객체형태가아닌 formdata 자체만 보내야하는 것의 차이를 알고 해결

### 2) 게시물 삭제 시 리렌더링이 안되는 문제

- useEffect 사용으로 인해 삭제 이후의 렌더링이 안되어 리덕스를 사용하여 상태관리를 함으로써 정상적 삭제 해결

### 3) 반응형 CSS를 구축하지 못하는 문제

- 미디어 쿼리와 뷰포트를 공부하고 구축함으로써 반응형 웹 제작