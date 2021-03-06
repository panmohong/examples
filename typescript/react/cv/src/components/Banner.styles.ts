import styled from 'styled-components';
import { device } from './mediaQuery';

export const Icon = styled.div`
  width: 1rem;
  height: 1rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;

  > div {
    background-color: #000;
    color: #000;
  }
`;

export const Row = styled.div`
  margin: 1px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > div:first-child,
  > a:first-child {
    color: #000;
    font-size: 12px;
    height: 1rem;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }

  > * {
    margin-left: 4px;
  }
`;

export const Layout = styled.div`
  display: flex;

  &:first-child {
    align-items: center;
    font-size: 2rem;
    padding-left: 10%;
    user-select: none;

    @media ${device.mobileL} {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    > div {
      overflow: hidden;
      white-space: nowrap;
      /* text-overflow: ellipsis; */
    }
  }

  &:last-child {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
  }
`;

export const Banner = styled.div`
  border-bottom: 1px solid #000;
  height: 8rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  > ${Layout} {
    width: 50%;
  }

  @media ${device.mobileL} {
    height: auto;
    flex-direction: column;

    > ${Layout} {
      width: 100%;
    }
  }
`;
