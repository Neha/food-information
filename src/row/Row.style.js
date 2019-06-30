import styled from 'styled-components';

export const Row = styled.div`
  padding: 0.6rem;
  border-bottom: 1px solid #fff;
  font-weight: 800;
  display: flex;
  transition: 0.5s;
  color: ${props => (props.isIndented === true && '#fff') || '#999'};
  background: ${props => (props.isIndented === true && '#62BD96') || '#eee'};
  transform: translate(${props => (props.isIndented === true && '1.875rem') || '0'});
`;

export default Row;
