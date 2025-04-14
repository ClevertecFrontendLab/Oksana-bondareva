import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { RecipeCardProps } from '~/utils/types';

import { FavoritesIcon } from '../icons/FavoritesIcon';
import { LikesIcon } from '../icons/LikesIcon';

const MiniCard: React.FC<RecipeCardProps> = ({
    title,
    description,
    tag,
    tagIcon,
    favorites,
    likes,
}) => (
    <Box
        w={{ xl: '660px', md: '95%' }}
        border='1px solid #00000014'
        borderRadius='8px'
        overflow='hidden'
    >
        <Box
            textAlign='left'
            pl={{ xl: '22px', md: '10px' }}
            pr={{ xl: '30px', md: '15px' }}
            pt={{ xl: '24px', md: '12px' }}
            maxW='570px'
        >
            <Heading
                fontSize={{ xl: '20px', md: '16px' }}
                fontWeight='500'
                whiteSpace='nowrap'
                overflow='hidden'
                textOverflow='ellipsis'
            >
                {title}
            </Heading>
            <Text fontSize='14px' noOfLines={3} mt={{ xl: '8px', md: '12px' }} mb='28px'>
                {description}
            </Text>
            <Flex justifyContent='space-between'>
                <Flex
                    background='#FFFFD3'
                    borderRadius='4px'
                    px={{ xl: '8px', md: '4px' }}
                    gap='8px'
                    fontSize='14px'
                    alignItems='center'
                >
                    <Image src={tagIcon} alt={title} w='16px' h='16px' />
                    <Text>{tag}</Text>
                </Flex>
                <Flex gap='18px'>
                    {favorites && (
                        <Flex align='center' gap='5px'>
                            <FavoritesIcon w='12px' h='12px' />
                            <Text fontSize='12px' fontWeight='600' color='#2DB100'>
                                {favorites}
                            </Text>
                        </Flex>
                    )}
                    {likes && (
                        <Flex align='center' gap='5px'>
                            <LikesIcon w='12px' h='12px' />
                            <Text fontSize='12px' fontWeight='600' color='#2DB100'>
                                {likes}
                            </Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Box>
    </Box>
);

export default MiniCard;
