import styled from 'styled-components';
import Profile from "./Components/Profile/Profile";
import Preferences from "./Components/Preferences";

const WrapperDiv = styled.div`
    width: 447px;
`;

function General() {
    return (
        <WrapperDiv className='d-inline-flex flex-column'>
            <Profile/> {/* Фото компании, название, тип и адрес */}
            <Preferences/> {/* Инпуты, где можно поменять название, тип и адрес */}
        </WrapperDiv>
    );
}

export default General;