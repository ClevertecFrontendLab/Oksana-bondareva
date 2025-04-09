import { Box, Flex, Text } from '@chakra-ui/react';

import { FavoritesIcon } from '../icons/FavoritesIcon';
import { LikesIcon } from '../icons/LikesIcon';
import { PeopleIcon } from '../icons/PeopleIcon';
import { WriteIcon } from '../icons/WriteIcon';

export const Marks = () => (
    <Flex flexDirection='column' justifyContent='space-between' h='calc(130vh - 80px)'>
        <Flex flexDirection='column' gap='24px' pt='16px' pl='40%'>
            <Flex gap='8px' p='8px' alignItems='center'>
                <FavoritesIcon />
                <Text fontSize='16px' fontWeight='600' color='#2DB100'>
                    185
                </Text>
            </Flex>
            <Flex gap='8px' p='8px' alignItems='center'>
                <PeopleIcon />
                <Text fontSize='16px' fontWeight='600' color='#2DB100'>
                    589
                </Text>
            </Flex>
            <Flex gap='8px' p='8px' alignItems='center'>
                <LikesIcon />
                <Text fontSize='16px' fontWeight='600' color='#2DB100'>
                    587
                </Text>
            </Flex>
        </Flex>
        <Box
            w='208px'
            h='208px'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            position='relative'
        >
            <Box
                position='absolute'
                w='100%'
                h='100%'
                background='radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.7) 0%, rgba(255, 255, 255, 0) 100%)'
                borderRadius='full'
                zIndex={0}
            />
            <Flex flexDirection='column' alignItems='center' zIndex={1}>
                <WriteIcon />
                <Text fontSize='12px' color='#000000A3' pt='12px'>
                    Записать рецепт
                </Text>
            </Flex>
        </Box>
    </Flex>
);
