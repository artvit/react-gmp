import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Background = styled.div`
  background: black;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #f65261;
`;

export const DetailsLayout = styled.div`
  padding: 25px 40px 40px;
  display: flex;
  flex-flow: row nowrap;
`;

export const DetailsText = styled.div`
  margin-left: 60px;
  flex-grow: 1;
`;

export const Cover = styled.img`
  display: block;
  flex-grow: 0;
  object-fit: cover;
  height: 400px;
`;

export const Title = styled.div`
  font-size: 48px;
`;

export const TitleText = styled.span`
  margin-right: 20px;
`;

export const Rating = styled.div`
  display: inline-block;
  height: 50px;
  width: 50px;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  line-height: 45px;
`;

export const YearLengthBlock = styled.div`
  display: flex;
  margin: 20px 0;
  flex-flow: row nowrap;
  color: #f65261;
  font-size: 18px;
  >* {
    margin-right: 30px;
  }
`;
