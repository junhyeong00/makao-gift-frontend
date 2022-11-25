import styled from 'styled-components';

const PrimaryButton = styled.button`
    margin-top: 1em;
    padding: 1.2em 3em;
    border: none;
    border-radius: 10px;
    background-color: rgb(34,218,171);
    color: #FFF;

    :hover {
        color: #006148;
    }

    :active {
        color: #FFF;
        background: #008C68;
    }
`;

export default PrimaryButton;
