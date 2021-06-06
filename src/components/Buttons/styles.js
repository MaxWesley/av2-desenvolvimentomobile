import styed from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    border: 1px solid #c427cc;
    border-color: ${props => props.border};
    
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 10px;
    padding-right: 10px;

    background-color: ${props => props.bg}
`

export const Text = styled.Text`
    color: ${props => props.color || "#c427cc"};
    font-weight: bold;
`