import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { RecipeCardProps } from '~/utils/types';

import { FavoritesIcon } from '../icons/FavoritesIcon';
import { LikesIcon } from '../icons/LikesIcon';

const NewRecipeCard: React.FC<RecipeCardProps> = ({
    title,
    description,
    imageUrl,
    tag,
    tagIcon,
    favorites,
    likes,
}) => (
    <Box
        w={{ xl: '325px', md: '158px' }}
        border='1px solid #00000014'
        borderRadius='8px'
        overflow='hidden'
        position='relative'
        display='flex'
        flexDirection='column'
        height='100%'
    >
        <Box position='relative'>
            <Image
                src={imageUrl}
                alt={title}
                height={{ xl: '230px', md: '128px' }}
                width='100%'
                objectFit='cover'
            />
            <Flex
                display={{ xl: 'none', md: 'flex' }}
                position='absolute'
                top='9px'
                left='8px'
                bg='#D7FF94'
                borderRadius='4px'
                px='4px'
                gap='2px'
                alignItems='center'
                zIndex='1'
            >
                <Image src={tagIcon} alt={title} w='14px' h='16px' />
                <Text fontSize='14px' letterSpacing={0} whiteSpace='nowrap'>
                    {tag}
                </Text>
            </Flex>
        </Box>
        <Flex
            flex='1'
            flexDirection='column'
            pt={{ xl: '16px', md: '8px' }}
            pb={{ xl: '20px', md: '8px' }}
            textAlign='left'
            px={{ xl: '24px', md: '8px' }}
            minH={{ md: '92px' }}
        >
            <Heading
                fontSize={{ xl: '20px', md: '16px' }}
                fontWeight='500'
                whiteSpace={{ xl: 'nowrap', md: 'wrap' }}
                overflow='hidden'
                noOfLines={{ md: 2 }}
                textOverflow='ellipsis'
                letterSpacing={0.48}
                lineHeight={{ xl: '1' }}
            >
                {title}
            </Heading>
            <Text
                fontSize='14px'
                noOfLines={3}
                mt='8px'
                mb='28px'
                letterSpacing={0.55}
                display={{ xl: '-webkit-box', md: 'none' }}
            >
                {description}
            </Text>
            <Box mt='auto'>
                <Flex justifyContent='space-between' pr='4px' display={{ xl: 'flex', md: 'none' }}>
                    <Flex
                        bg='#D7FF94'
                        borderRadius='4px'
                        px='8px'
                        gap='8px'
                        fontSize='14px'
                        alignItems='center'
                    >
                        <Image src={tagIcon} alt={title} w='16px' h='16px' />
                        <Text letterSpacing={0.45}>{tag}</Text>
                    </Flex>
                    <Flex gap='15px'>
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
                <Flex gap='15px' justifyContent='flex-start' display={{ xl: 'none', md: 'flex' }}>
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
            </Box>
        </Flex>
    </Box>
);

export default NewRecipeCard;
