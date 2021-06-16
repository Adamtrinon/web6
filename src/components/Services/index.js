import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, 
    ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg2.svg'
import Icon3 from '../../images/svg3.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduces stuff you want reduced</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>virtual offices</ServicesH2>
                    <ServicesP>You can access our platform anywhere</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>America is back baby</ServicesH2>
                    <ServicesP>birds aren't real, proove me wrong</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
