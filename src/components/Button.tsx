import React from 'react'

interface ButtonProps {

}

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
    return <button {...props}>{children}</button>
}

export default Button