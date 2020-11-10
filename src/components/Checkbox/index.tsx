import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div < { onClick: IProps['onClick'] }>`
    display: flex;
    cursor: pointer;
    user-select: none;
    height: 64px;
    align-items: center;
`

const SelectedContainer = styled.strong`
    padding-right: 8px;
`

interface IProps {
    name: string;
    selected: boolean;
    onClick: (element: string) => void;
}

export const Checkbox: React.FC<IProps> = ({ name, selected, onClick }: IProps) => {
    return (
        <CheckboxContainer onClick={() => onClick(name)}>
            {selected && <SelectedContainer> x </SelectedContainer>}
            <strong>{name}</strong>
        </CheckboxContainer>
    )
}
