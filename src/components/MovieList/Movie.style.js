import styled, { css } from 'styled-components';

export const MovieBox = styled.div`
  width: 300px;
  color: lightgray;
  position: relative;
`;

export const textEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Cover = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 450px;
  cursor: pointer;
`;

export const TitleBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const Title = styled.div`
  flex: 0 1 auto;
  font-size: 20px;
  cursor: pointer;
  ${textEllipsis}
`;

export const Year = styled.div`
  flex: 0 0 80px;
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 4px;
`;

export const Tagline = styled.div`
  margin-top: 10px;
  ${textEllipsis}
`;

export const ActionBox = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const ActionButton = styled.button`
  display: block;
  height: 40px;
  width: 40px;
  font-size: 20px;
  background: rgba(0,0,0,0.6);
  color: white;
  border: 0;
  border-radius: 50%;
  visibility: hidden;

  ${MovieBox}:hover & {
    visibility: visible;
  }
`;
