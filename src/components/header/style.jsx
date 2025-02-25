import styled from "styled-components"
import "@fontsource/roboto";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;

    .header {
        &-logo {
            margin-right: 3rem;
        }

        &-contents {
            &__date {
                display: flex;

                &-current {
                    font-family: 'Roboto', sans-serif;
                    font-size: 18px;
                    font-weight: 600;
                    color: #45505E;
                    line-height: 21.09px;
                    margin-bottom: 8px;

                    &:first-of-type {
                        padding-right: 8px;
                        margin-right: 8px;
                        border-right: 1px solid #45505E;
                    }
                }
            }

            &__text {
                font-weight: 500;
                font-size: 14px;
                line-height: 16.41px;
                color: #8C9CAD;
            }
        }
    }

`