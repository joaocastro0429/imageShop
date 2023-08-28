'use client'
import { styled } from "styled-components";
import Image from "next/image";
import logo from '../../public/logo (1).png'
import Link from "next/link";
import { Container } from "@/app/styles/util";
import ShoppingCartImage from '../../public/carrinho.png'


const Header = () => {

  return (
    <>
      <StyledHeader>
        <StyledNavbar>

          <Image src={logo} width={100} height={50} alt="imagineshop logo" />

          <StyledMenu>
            <StyledMenuItem>
              <Link href="/">Home</Link>
            </StyledMenuItem>

            <StyledMenuItem>
              <Link href="/about">Sobre</Link>

            </StyledMenuItem>

            <StyledMenuItem>
            <Link href="/shopping-cart">
              <Image src={ShoppingCartImage} width={52} height={52} alt="shopping cart image"/>
              </Link>

            </StyledMenuItem>
          </StyledMenu>
        </StyledNavbar>
      </StyledHeader>
    </>
  )
}

const StyledHeader = styled.header`_
width: 100vw;
margin: 1.87rem 0 3.125rem 0;
`;
const StyledNavbar = styled.nav`
${Container}
 display: flex;
align-items: center;
justify-content: space-between;
_`;
const StyledMenu = styled.ul`_
list-style-type: none;
padding: 0;
margin: 0;
display: flex;
gap: 2.5rem;
align-items: center;
`;
const StyledMenuItem = styled.li`_
font-size: 16px;
font-weight: 700;
list-style: none;


a {
  text-decoration: none;
  color: #000;
}

a:hover {
  color: ${({ theme }) => theme.colors.primary};
}


`;





export default Header;