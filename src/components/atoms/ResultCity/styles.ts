import styled from "styled-components";

export const CityList = styled.ul`
    background: rgba(255, 255, 255, 0.5);
    margin-top: .2rem;
    padding: .3rem 0;
    list-style: none;
    cursor: pointer;
    li {
        padding: .3rem .8rem;
        &:not(:last-child) {
            border-bottom: 1px solid rgba(81, 8, 126, 0.2);
        }
    }
`;