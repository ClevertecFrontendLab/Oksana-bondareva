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
    <Flex flexDirection='column' alignItems='center' width='100%'>
        <Flex flexDirection='column' alignItems='center' maxW='518px'>
            <Heading as='h1' fontSize='48px' py='32px'>
                {title}
            </Heading>
            {subtitle && (
                <Text fontSize='18px' color='#134B00' pt='8px'>
                    {subtitle}
                </Text>
            )}
            <Flex flexDirection='column' alignItems='center'>
                <Flex gap='12px'>
                    <Box border='1px solid #0000007A' borderRadius='6px' p='12px'>
                        <InputButtonIcon />
                    </Box>
                    <InputGroup w='458px' border='1px solid #0000007A' borderRadius='6px' pl='16px'>
                        <Input
                            w='410px'
                            placeholder='Название или ингредиент...'
                            _placeholder={{ color: '#134B00', fontSize: '18px' }}
                            border='none'
                        />
                        <InputRightElement p='15px'>
                            <IconButton
                                aria-label='Search'
                                icon={<SearchIcon boxSize='18px' />}
                                size='sm'
                                h='100%'
                                w='100%'
                                background='white'
                                border='none'
                            />
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                <Flex pt='16px' alignItems='center'>
                    <Text pl='8px'>Исключить мои аллергены</Text>
                    <Image src='/icons/Switch.svg' alt='Switch' pl='12px' mr='16px' />
                    <InputGroup
                        border='1px solid #00000014'
                        borderRadius='6px'
                        w='234px'
                        pl='16px'
                        py='8px'
                    >
                        <Input
                            border='none'
                            placeholder='Выберите из списка...'
                            _placeholder={{ color: '#000000A3', fontSize: '16px' }}
                        />
                        <InputRightElement pr='10px' pt='6px'>
                            <ChevronDownIcon color='#000000A3' boxSize='20px' />
                        </InputRightElement>
                    </InputGroup>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
);
