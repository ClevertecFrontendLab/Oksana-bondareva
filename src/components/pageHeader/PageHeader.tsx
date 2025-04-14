import {
    Box,
    ChevronDownIcon,
    Flex,
    Heading,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    SearchIcon,
    Text,
} from '@chakra-ui/icons';
import React from 'react';

import { InputButtonIcon } from '../icons/InputButtonIcon';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => (
    <Flex
        flexDirection='column'
        alignItems='center'
        width='100%'
        pl={{ xl: '6px', md: '0px' }}
        letterSpacing={{ xl: 1, md: 0.4 }}
    >
        <Flex flexDirection='column' alignItems='center' maxW={{ xl: '710px', md: '100%' }}>
            <Box pt={{ xl: '24px', md: '16px' }}>
                <Heading as='h1' fontSize={{ xl: '48px', md: '24px' }}>
                    {title}
                </Heading>
                {subtitle && (
                    <Text
                        fontSize={{ xl: '16px', md: '14px' }}
                        color='#0000007A'
                        pt={{ xl: '12px', md: '18px' }}
                        letterSpacing={0.2}
                    >
                        {subtitle}
                    </Text>
                )}
            </Box>
            <Flex flexDirection='column' alignItems='center' pt={{ xl: '30px', md: '18px' }}>
                <Flex gap='12px'>
                    <Box
                        border='1px solid #0000007A'
                        borderRadius='6px'
                        px={{ xl: '12px', md: '7px' }}
                        py={{ xl: '10px', md: '5px' }}
                        h={{ xl: '48px', md: '32px' }}
                    >
                        <InputButtonIcon />
                    </Box>
                    <InputGroup
                        w={{ xl: '458px', md: '404px' }}
                        h={{ xl: '48px', md: '32px' }}
                        border='1px solid #0000007A'
                        borderRadius='6px'
                        pt='5px'
                    >
                        <Input
                            w='410px'
                            pb={{ xl: '0px', md: '15px' }}
                            pl={{ xl: '12px', md: '12px' }}
                            placeholder='Название или ингредиент...'
                            _placeholder={{
                                color: '#134B00',
                                fontSize: { xl: '20px', md: '14px' },
                            }}
                            border='none'
                        />
                        <InputRightElement p={{ xl: '12px', md: '5px' }}>
                            <IconButton
                                aria-label='Search'
                                icon={<SearchIcon boxSize={{ xl: '20px', md: '15px' }} />}
                                size='sm'
                                h={{ xl: '100%', md: '50%' }}
                                pb={{ xl: '0px', md: '5px' }}
                                pl={{ xl: '0px', md: '10px' }}
                                w='100%'
                                background='white'
                                border='none'
                            />
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                <Flex pt='15px' alignItems='center' pl='10px' display={{ xl: 'flex', md: 'none' }}>
                    <Text fontSize='16px' fontWeight={500} letterSpacing={0.5}>
                        Исключить мои аллергены
                    </Text>
                    <Image src='/icons/Switch.svg' alt='Switch' pl='3px' mr='16px' />
                    <InputGroup border='1px solid #00000014' borderRadius='6px' w='234px'>
                        <Input
                            border='none'
                            placeholder='Выберите из списка...'
                            _placeholder={{ color: '#000000A3', fontSize: '16px' }}
                        />
                        <InputRightElement pr='2px' pt='5px'>
                            <ChevronDownIcon color='#000000A3' boxSize='20px' />
                        </InputRightElement>
                    </InputGroup>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
);
