import { Box, Flex, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import { ArrowIconRight } from '../icons/ArrowIconRight';
import { BurgerIcon } from '../icons/BurgerIcon';
import { HeaderIconText } from '../icons/HeaderIconText';
import { LogoIcon } from '../icons/HeaderLogoIcon';
import { UserProfile } from '../userProfile/UserProfile';

const Header = () => {
    const location = useLocation();
    const isJuiciestPage = location.pathname === '/best';
    const isVeganPage = location.pathname === '/vegan';

    return (
        <Box
            as='header'
            bg='#FFFFD3'
            h={{ xl: '80px', md: '64px' }}
            w='100%'
            display='flex'
            alignItems='center'
            pr={{ xl: '70px', md: '32px' }}
            data-test-id='header'
            fontFamily="'Inter', sans-serif"
        >
            <Box w='100%' mx='auto'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center' gap='128px'>
                        <Flex alignItems='center' gap='6px' pl={{ md: '25px' }}>
                            <LogoIcon color='#2B823F' width='32px' height='32px' />
                            <HeaderIconText color='#2B823F' width='96px' height='24px' />
                        </Flex>
                        <Flex alignItems='center' gap='8px' display={{ xl: 'flex', md: 'none' }}>
                            <Text color={isJuiciestPage || isVeganPage ? '#000000A3' : '#000000'}>
                                Главная
                            </Text>
                            {isJuiciestPage && (
                                <>
                                    <ArrowIconRight boxSize={2} />
                                    <Text>Самое сочное</Text>
                                </>
                            )}
                            {isVeganPage && (
                                <>
                                    <ArrowIconRight boxSize={2} />
                                    <Text color='#000000A3'>Веганская кухня</Text>
                                    <ArrowIconRight boxSize={2} />
                                    <Text>Вторые блюда</Text>
                                </>
                            )}
                        </Flex>
                    </Flex>
                    <Box display={{ xl: 'flex', md: 'none' }}>
                        <UserProfile
                            avatarUrl='/images/avatar.png'
                            name='Екатерина Константинопольская'
                            username='bake_and_pie'
                        />
                    </Box>
                    <BurgerIcon />
                </Flex>
            </Box>
        </Box>
    );
};

export default Header;
