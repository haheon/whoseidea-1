import styled from 'styled-components';
export default function Slide({ img }: any) {
  return <IMG src={img} />;
}
// slide 부분 이미지 크기 수정
const IMG = styled.img`
  width: 103%;
  height: 70vh;
`;
