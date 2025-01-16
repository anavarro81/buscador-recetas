"use client";
import { FilterBox } from "@/Components";
import styled from "styled-components";
// import { Container, styled } from "@mui/material";

// const StyledContainer = styled(Container)({
//     border: "1px solid red",
// });
const MainStyled = styled.main`
    display: grid;
    grid-template-columns: 350px 1fr;
`;
export default function Home() {
    return (
        <div>
            <MainStyled>
                <FilterBox></FilterBox>
                {/* <StyledContainer>
                    <TestComponent />
                </StyledContainer> */}
            </MainStyled>
        </div>
    );
}
