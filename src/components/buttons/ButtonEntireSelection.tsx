import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { ArrowRight } from '../icons/ArrowRight';

export const ButtonEntireSelection = () => {
    const navigate = useNavigate();

    return (
        <Button
            display='flex'
            h={{ xl: '48px', md: '40px' }}
            background='#B1FF2E'
            fontSize={{ xl: '18px', md: '16px' }}
            fontWeight='600'
            py='6px'
            px={{ xl: '18px', md: '16px' }}
            mb={{ xl: '14px', md: '0px' }}
            mr={{ xl: '-5px', md: '0px' }}
            mt={{ xl: '0px', md: '12px' }}
            border='1px solid #B1FF2E'
            borderRadius='6px'
            cursor='pointer'
            onClick={() => navigate('/best')}
        >
            Вся подборка
            <ArrowRight w='35px' />
        </Button>
    );
};
