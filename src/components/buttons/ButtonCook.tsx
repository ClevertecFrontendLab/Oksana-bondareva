import { Button } from '@chakra-ui/react';

export const ButtonCook = () => (
    <Button
        borderWidth='1px'
        borderStyle='solid'
        borderColor='#2DB100'
        borderRadius='6px'
        color='#2DB100'
        px={{ xl: '12px', md: '7px' }}
        h={{ xl: '35px', md: '32px' }}
        bg='white'
        cursor='pointer'
        fontSize={{ xl: '14px', md: '12px' }}
        flexShrink={0}
    >
        Готовить
    </Button>
);
