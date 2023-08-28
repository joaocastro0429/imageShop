'use client'

import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"
import Logo from '../../public/logo (1).png'
import { Container } from "@/app/styles/util"



const Products = () => {
    return (
        <StyledProducts>
            <StyledTitle><span>De</span>staques</StyledTitle>

            <StyledProductList>
                <StyledProdutctsItem>

                    <div>
                        <Link href='/about'>
                            <Image src={Logo} height={230} width={230} alt="logo" />
                            <StyledName>smartPhone</StyledName>
                            <StyledProductsPrice>R$1299,00</StyledProductsPrice>
                            <StyledProductSplitPrice>10x de R$ 129,90 sem juros</StyledProductSplitPrice>
                        </Link>
                    </div>

                </StyledProdutctsItem>

                <StyledProdutctsItem>

                    <div>
                        <Link href='/about'>
                            <Image src={Logo} height={230} width={230} alt="logo" />
                            <StyledName>smartPhone</StyledName>
                            <StyledProductsPrice>R$1299,00</StyledProductsPrice>
                            <StyledProductSplitPrice>10x de R$ 129,90 sem juros</StyledProductSplitPrice>
                        </Link>
                    </div>

                </StyledProdutctsItem>
                <StyledProdutctsItem>

                    <div>
                        <Link href='/about'>
                            <Image src={Logo} height={230} width={230} alt="logo" />
                            <StyledName>smartPhone</StyledName>
                            <StyledProductsPrice>R$1299,00</StyledProductsPrice>
                            <StyledProductSplitPrice>10x de R$ 129,90 sem juros</StyledProductSplitPrice>
                        </Link>
                    </div>

                </StyledProdutctsItem>

            </StyledProductList>

        </StyledProducts>
    )

}


const StyledProducts = styled.section`
  ${Container}
 
`


const StyledTitle = styled.h2`

font-size: 1.875rem;
font-weight: 700;
margin-top: 3.125rem;
margin-bottom: 2.8rem;
span {
    text-decoration: underline ${({ theme }) => theme.colors.primary};
  }

`

const StyledProductList = styled.div`
 
display:grid;
grid-template-columns: repeat(4, 1fr);
gap: 2.125rem;
margin-bottom: 11.25rem;


`

const StyledProdutctsItem = styled.div`
height: 24rem;
border: 1px solid #eaeaea;
border-radius: 4px;
box-shadow: 5px 0px 10px #d9d9d9;
padding: 1rem;

&:hover {
    box-shadow: 5px 10px 10px #d9d9d9;
    p {
      color: ${({ theme }) => theme.colors.primary}
    }
  }


`

const StyledName = styled.p`

  font-size: 0.875rem;

`
const StyledProductsPrice = styled.p`
font-size: 1.125rem;
font-weight: 700;
  margin: 1.125rem 0;

`
const StyledProductSplitPrice = styled.small`
  font-size: 0.75rem;
  font-weight: 700;
  color: #999;
  margin-bottom: 2rem;
`;


export default Products