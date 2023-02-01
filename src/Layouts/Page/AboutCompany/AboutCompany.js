import styled from 'styled-components';
import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";

const WrapperDiv = styled.div`
    padding: 64px 72px 64px 72px;
    width: 1140px;
`;

function AboutCompany() {
    return (
        <WrapperDiv className='row'> 
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='col d-inline-flex flex-row justify-content-between mt-5'>
                <General/> {/* Основная информация вроде названия, типа и телефона */}
                <Addresses/> {/* Список доступных адресов заведений */}
            </div>
        </WrapperDiv>
    );
}

export default AboutCompany;