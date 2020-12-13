# 리엑트!

> 목표는 리액트 마스터! 
> 백엔드는 편하게 spring boot 로 구현하기! 

* 실행방법 yarn start

## 개발기록
* 20.12.13 : 어려웡 ㅠㅠ
> ~17. useMemo 를 사용하여 연산한 값 재사용하기~   
> useMemo를 이용하여 users에 변화가 있을때만 컴포넌트 랜더링되도록 수정   
> ~18. useCallback을 사용하여 함수 재사용하기~   
> useCallback을 사용하지 않으면 해당 컴포넌트가 리랜더링 사용할때마다 함수를 새로 생성한다고 합니다. 함수가 새로생성되는 것을 막고 최신값을 이용하기위해 useCallback(function,[사용되는 props]) 처럼 함수를 사용해야함.   
> ~19. React.memo 를 사용한 컴포넌트 리렌더링 방지~   
> 무분별한 React.memo 를 사용하면 쓸모없는 컴포넌트 비교를 하기 때문에 잘알고 사용할 것 너무어렵다.ㅠㅠ   
> ~20. useReducer 를 사용하여 상태 업데이트 로직 분리하기~    
> 진행중 App.js 변경   
> 리듀서 너~~무 어렵다. useState, useReducer 의 장단점에 대해 공부를 더해야할 것같습니다.   

* 20.12.12 : 너무재미있는데 어렵다..   
> ~12. useRef로 컴포넌트 안의 변수 만들기~   
> ~13. 배열에 항목 추가하기~   
> ~14. 배열에 항목 제거하기~   
> ~15. 배열에 항목 수정하기~   
> ~16. useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정하기~   
[https://rinae.dev/posts/a-complete-guide-to-useeffect-ko](https://rinae.dev/posts/a-complete-guide-to-useeffect-ko)   
useEffect 중요+어려운 개념 읽어보기   

>   주로마운트시 하는 작업   
>   * props 로 받은 값을 컴포넌트의 로컬 상태로 설정    
>   * 외부 API 요청 (REST API 등)    
>   * 라이브러리 사용 (D3, Video.js 등...)    
>   * setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약    
>   언마운트시 하는 작업    
>   setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)   
>   * 라이브러리 인스턴스 제거   

* 20.12.10 : 비구조화 할당 너무 어렵.. 어제부터했는데   
불변성 지키기 ! 너무 재미있다 리액트! 했던것들인데 왜이렇게 재밌고 정리되는느낌일까요?  
> ~8. input상태 관리하기 ~   
> ~9. 여러개의  input 상태 관리하기~ 너무 재미있네~   
> ~10. useRef로 특정 DOM 선택하기~  
> ~11. 배열 렌더링하기~ 이재미있는걸 왜 여태 안했담??   

* 20.12.09 : 사용했던 방식과 다른 state 사용 방식 ㅠㅠ 너무 어렵습니다. 빨리해야하는데 큰일이넹. ㅠㅠ 
> ~7. useState 를 통해 컴포넌트에서 바뀌는 값 관리하기~

* 20.12.06 : 아주 처음보는것같은데 아자! 2주완성 아자! 
> ~4. JSX 완료~   
> ~5. props를 통해 컴포넌트에게 값 전달하기~   
> ~6. 조건부 렌더링 ~  

* 20.12.06 : https://react.vlpt.us/basic/02-prepare.html 페이지 따라가기 벨로퍼트님 강의 따라가기!    
```
$ npx create-react-app begin-react
```
npx 를 이용하여 리액트 프로젝트 시작 
1.3 리엑트 첫 컴포넌트 (완료)
