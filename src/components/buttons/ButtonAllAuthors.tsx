import { Button } from '@chakra-ui/react';

import { ArrowRight } from '../icons/ArrowRight';

export const ButtonAllAuthors = () => (
    <Button
        gap='4px'
        h='48px'
        background='#C4FF61'
        fontSize={{ xl: '18px', md: '16px' }}
        fontWeight='600'
        border='none'
        cursor='pointer'
        pt='15px'
    >
        Все авторы
        <ArrowRight w='30px' />
    </Button>
);
