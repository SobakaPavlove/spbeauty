import styled from "styled-components";

const Input = styled.input`
    outline: none;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    color: #0F172A;
    &:hover {
        background-color: #F8FAFC;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className='caption'>{title}</div>);
    return (
        <div className='d-flex flex-column gap-1'>
            {Title}
            <Input className='px-4 py-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;