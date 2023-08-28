'use client'
import Image from "next/image"
import { styled } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import logo from '../../public/logo (1).png'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Container } from "@/app/styles/util";

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterContainer>
                <Image src={logo} width={130} height={60} alt="imagineshop log" />
                <StyledFooterContact>
                    Imagine Shop - +55 (48) 3771 - 1703 3771 - 1823 - imagine@imagineschool.com.br - Rua Miguel Daux, 129 - Coqueiros - Florianópolis/SC

                </StyledFooterContact>
                <StyledSocialMediaLinks>
                    <li>
                        <StyledSocialMediaIcon icon={faYoutube} />
                    </li>
                    <li>
                        <StyledSocialMediaIcon icon={faInstagram} />
                    </li>
                    <li>
                        <StyledSocialMediaIcon icon={faFacebook} />
                    </li>
                </StyledSocialMediaLinks>
            </StyledFooterContainer>


        </StyledFooter>
    )
}




const StyledFooter = styled.footer`


width: 100vw;
  height: 12.5rem;
  background-color: #f4f4f4;
`


const StyledFooterContainer = styled.div`
${Container}
display: grid;
grid-template-columns: 250px auto 250px;
padding: 2.5rem 0;
`
const StyledFooterContact = styled.p`
  font-size: 0.75rem;
  margin: 0;
  text-align: center;
  margin-top: 8.125rem;
`;
const StyledSocialMediaLinks = styled.ul`
list-style-type: none;
padding: 0;
margin: 0;
display: flex;
gap: 1.5rem;
`
const StyledSocialMediaIcon = styled(FontAwesomeIcon)`
  font-size: 1.875rem;
`;





export default Footer