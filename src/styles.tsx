import styled from "@emotion/styled";

// 전체 컨테이너
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

// 내부 Wrapper
const InnerWrapper = styled.div`
  width: 600px;
`;

// 헤더
const Header = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
`;

// StyledInput: 입력 필드 스타일링
const StyledInput = styled.input`
  width: 95%;
  padding: 16px;
  height: 32px; /* 높이 설정 */
  border: none; /* 연한 회색 테두리 */
  border-radius: 14px; /* 둥근 모서리 */
  background-color: #e0e0e0; /* 연한 배경 */
  font-size: 14px;
  color: #333333;
  margin-bottom: 32px; /* 하단 여백 */

  &:focus {
    outline: none;
    border-color: #fffff; /* 포커스 시 파란색 */
  }
`;

// SectionWrapper: Tab과 List가 있는 섹션
const SectionWrapper = styled.div`
  width: 95%; /* 부모 요소의 너비 */
  padding: 16px; /* 내부 여백 */
  background-color: #ffffff; /* 흰색 배경 */
  border-radius: 14px; /* 라운드 모서리 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 약간의 그림자 */
`;

// TabsWrapper: Tab의 스타일링
const TabsWrapper = styled.div`
  display: flex;
  justify-content: center; /* 탭을 가운데 정렬 */
  margin-bottom: 16px;
  width: 50%; /* 가로 화면의 1/3 */
  margin: 0 auto; /* 가로 가운데 정렬 */
  padding: 12px;
  

  button {
    flex: 1; /* 각 버튼이 내부에서 동일한 비율로 크기 나눔 */
    width: 100%; /* 부모 요소의 너비 */
    padding: 8px 6px;
    background-color: transparent; /* 배경 투명 설정 */
    border: none;
    border-radius: 8px;
    color: #555555;
    font-size: 14px;
    cursor: pointer;
    text-align: center;

    &:hover {
      background-color: #e0f7fa; /* 연한 파란색으로 변경 */
    }

    &.active {
      background-color: rgba(160, 209, 247, 0.3);
      color: #3498db;
      font-weight: bold;
    }
  }
`;

// ListWrapper: 할 일 리스트 스타일링
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #ffffff;
  margin-bottom: 12px; /* 항목 간 간격 추가 */

  input[type="checkbox"] {
    margin-right: 4px; /* 체크박스 오른쪽 간격 */
  }

  span {
    flex: 1;
    display: flex;
    justify-content: space-between; /* 텍스트와 x 버튼 사이 공간 채움 */
    align-items: center;
    margin-left: 8px; /* 체크박스와 텍스트 사이 간격 */

    .text {
      color: #333333;
      white-space: nowrap; /* 줄바꿈 방지 */
      overflow: hidden; /* 넘치는 텍스트 숨김 */
      text-overflow: ellipsis; /* 넘치는 텍스트 말줄임 */
    }

    button {
      background: none;
      border: none;
      color: #ff6b6b; /* 빨간색 아이콘 */
      font-size: 18px;
      cursor: pointer;

      &:hover {
        color: #ff4d4d; /* 더 진한 빨간색 */
      }
    }
  }
`;

export {
  Container,
  InnerWrapper,
  Header,
  StyledInput,
  SectionWrapper,
  TabsWrapper,
  ListWrapper,
  ListItem,
};
