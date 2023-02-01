import styled from 'styled-components';
import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";

const WrapperDiv = styled.div`
    border: 1px solid rgba(100, 116, 139, 0.12);
    border-radius: 8px; 
    padding: 24px;
    height: 420px;
    width: 453px;
`;

const WFullDiv = styled.div`
    width: 100%;
`;

function Addresses() {
    return (
        <WrapperDiv className='d-inline-flex flex-column gap-2 mt-4 justify-content-between'>
            <div>
                <div className='title'>Адреса заведений</div>
                <WFullDiv className='d-inline-flex flex-column gap-3 mt-4'>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>  
                </WFullDiv>
            </div>
            <div>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </WrapperDiv>
    );
}

export default Addresses;