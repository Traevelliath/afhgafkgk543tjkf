import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Navigation = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  user-select: none;
  background: white;
  position: fixed;
  top: 0;
  z-index: 99;
  opacity: 0.95;
`

export const NavLinks = styled.div`
  padding-right: 4rem;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px 0 15px;
  cursor: pointer;
  font-size: 2rem;
`

export const Logo = styled(Link)`
  height: 5rem;
  width: min-content;
  box-sizing: border-box;
`

// .navigation {
//   height: 5rem;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 2rem;
//   user-select: none;
//   background: white;
//   position: fixed;
//   top: 0;
//   z-index: 99;
//   opacity: 0.95;
//
//   .logo-container {
//     height: 5rem;
//     width: min-content;
//     box-sizing: border-box;
//
//     .logo {
//       height: 100%;
//     }
//   }
//
//   .navlinks-container {
//     padding-right: 4rem;
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//
//     .navlink {
//       padding: 10px 15px 0 15px;
//       cursor: pointer;
//       font-size: 2rem;
//     }
//   }
// }