import { Icon, IconProps } from '@chakra-ui/react';

export const BurgerIcon = (props: IconProps) => (
    <Icon
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
        w='24px'
        h='24px'
        display={{ xl: 'none', md: 'block' }}
    >
        <path d='M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z' fill='black' />
    </Icon>
);
