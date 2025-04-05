import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { HeaderIconText } from '../icons/HeaderIconText';
import { LogoIcon } from '../icons/HeaderLogoIcon';

const Header = () => (
    <Box as='header' bg='#FFFFD3' h='80px' w='100%' display='flex' alignItems='center' pr='56px'>
        <Box w='100%' maxW='container.xl' mx='auto' px='16px'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Flex alignItems='center' gap='128px'>
                    <Flex alignItems='center' gap='6px'>
                        <LogoIcon color='#2B823F' width='32px' height='32px' />
                        <HeaderIconText color='#2B823F' width='96px' height='24px' />
                    </Flex>
                    <Text>Главная</Text>
                </Flex>
                <Flex alignItems='center' gap='12px'>
                    <Image
                        src='/images/avatar.png'
                        alt='avatar'
                        width='48px'
                        height='48px'
                        borderRadius='full'
                    />
                    <Box textAlign='left'>
                        <Text fontWeight='500' fontSize='18px'>
                            Екатерина Константинопольская
                        </Text>
                        <Text color='#000000A3' fontSize='14px'>
                            @bake_and_pie
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    </Box>
);

export default Header;
