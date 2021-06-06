import React from 'react'

import {
    Container,
    Text
} from './styles'

export function Button({ titulo }) {
    return (
        <Container>
            <Text>
                {titulo}
            </Text>
        </Container>
    )
};

export function Skill({ titulo, bg = 'white', border = "transparent", colorText = 'black', bold, fsize }) {
    return (
        <Container>
            <Text>
                {titulo}
            </Text>
        </Container>
    )

};