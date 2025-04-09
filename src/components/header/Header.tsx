import { Box, Flex, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import { ArrowIconRight } from '../icons/ArrowIconRight';
import { HeaderIconText } from '../icons/HeaderIconText';
import { LogoIcon } from '../icons/HeaderLogoIcon';
import { UserProfile } from '../userProfile/UserProfile';

const Header = () => {
    const location = useLocation();
    const isJuiciestPage = location.pathname === '/best';

    return (
        <Box
            as='header'
            bg='#FFFFD3'
            h='80px'
            w='100%'
            display='flex'
            alignItems='center'
            pr='56px'
            data-test-id='header'
        >
            <Box w='100%' maxW='container.xl' mx='auto' px='16px'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center' gap='128px'>
                        <Flex alignItems='center' gap='6px'>
                            <LogoIcon color='#2B823F' width='32px' height='32px' />
                            <HeaderIconText color='#2B823F' width='96px' height='24px' />
                        </Flex>
                        {isJuiciestPage ? (
                            <Flex alignItems='center' gap='10px'>
                                <Text color='#000000A3'>Главное</Text>
                                <ArrowIconRight mt='5px' />
                                <Text>Самое сочное</Text>
                            </Flex>
                        ) : (
                            <Text>Главная</Text>
                        )}
                    </Flex>
                    <UserProfile
                        avatarUrl='/images/avatar.png'
                        name='Екатерина Константинопольская'
                        username='bake_and_pie'
                    />
                </Flex>
            </Box>
        </Box>
    );
};

export default Header;
