import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { RecipeCardProps } from '~/utils/types';

import { FavoritesIcon } from '../icons/FavoritesIcon';
import { LikesIcon } from '../icons/LikesIcon';

const JuiciestCard: React.FC<RecipeCardProps> = ({
    title,
    description,
    imageUrl,
    tag,
    tagIcon,
    favorites,
    likes,
    isRecommended,
    recommendedBy,
}) => (
    <Box
        maxW={{ xl: '665px', md: '356px' }}
        border='1px solid #00000014'
        borderRadius='8px'
        overflow='hidden'
        display='flex'
        pr={{ xl: '0', md: '8px' }}
    >
        <Box position='relative'>
            <Box position='relative'>
                <Image
                    src={imageUrl}
                    alt={title}
                    h={{ xl: '100%', md: '128px' }}
                    w={{ xl: '346px', md: '162px' }}
                    objectFit='cover'
                />
                <Flex
                    display={{ xl: 'none', md: 'flex' }}
                    position='absolute'
                    top='8px'
                    left='8px'
                    background='#FFFFD3'
                    borderRadius='4px'
                    px='4px'
                    gap='2px'
                    alignItems='center'
                    zIndex='1'
                >
                    <Image src={tagIcon} alt={title} w='16px' h='16px' />
                    <Text fontSize='14px'>{tag}</Text>
                </Flex>
            </Box>
            {isRecommended && (
                <Flex
                    display={{ xl: 'flex', md: 'none' }}
                    position='absolute'
                    bottom='20px'
                    left='24px'
                    borderRadius='4px'
                    px='8px'
                    py='4px'
                    alignItems='center'
                    bg='#D7FF94'
                    fontSize='14px'
                    gap='8px'
                >
                    <Image src={recommendedBy?.avatar} alt='avatar' h='16px' w='16px' />
                    <Text fontSize='14px' fontWeight='500'>
                        {recommendedBy?.name} рекомендует
                    </Text>
                </Flex>
            )}
        </Box>
        <Box
            textAlign='left'
            pl={{ xl: '24px', md: '10px' }}
            pt={{ xl: '20px', md: '10px' }}
            w={{ xl: '300px', md: '198px' }}
            display='flex'
            flexDirection='column'
            height={{ md: '100%' }}
        >
            <Flex
                justifyContent='space-between'
                mb={{ xl: '26px', md: '2px' }}
                pr={{ xl: '10px', md: '0px' }}
            >
                <Flex
                    display={{ xl: 'flex', md: 'none' }}
                    background='#FFFFD3'
                    borderRadius='4px'
                    px='8px'
                    gap='8px'
                    fontSize='14px'
                    alignItems='center'
                >
                    <Image src={tagIcon} alt={title} w='16px' h='16px' />
                    <Text fontSize='14px'>{tag}</Text>
                </Flex>
                <Flex gap='16px' pl={{ xl: '0px', md: '4px' }}>
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
            <Box flex='1'>
                <Heading
                    fontSize={{ xl: '20px', md: '16px' }}
                    fontWeight='500'
                    whiteSpace={{ xl: 'nowrap', md: 'wrap' }}
                    overflow='hidden'
                    textOverflow='ellipsis'
                    letterSpacing={0.8}
                    lineHeight={{ xl: 1 }}
                    noOfLines={2}
                >
                    {title}
                </Heading>
                <Text
                    fontSize='14px'
                    noOfLines={3}
                    mt='8px'
                    mb={{ xl: '30px', md: '12px' }}
                    display={{ xl: '-webkit-box', md: 'none' }}
                >
                    {description}
                </Text>
            </Box>
            <Flex
                gap={{ xl: '8px', md: '12px' }}
                justifyContent='right'
                pb={{ xl: '19px', md: '4px' }}
            >
                <Button
                    display='flex'
                    gap='8px'
                    background='white'
                    px={{ xl: '12px', md: '6px' }}
                    border='1px solid#0000007A'
                    borderRadius='6px'
                    cursor='pointer'
                    fontSize={{ xl: '14px', md: '12px' }}
                    h={{ xl: '33px', md: '24px' }}
                    minW='auto'
                >
                    <FavoritesIcon />
                    <Text display={{ xl: 'inline', md: 'none' }}>Сохранить</Text>
                </Button>
                <Button
                    background='#000000EB'
                    color='white'
                    pr={{ xl: '12px', md: '9px' }}
                    pl={{ xl: '12px', md: '9px' }}
                    border='1px solid #000000EB'
                    borderRadius='6px'
                    cursor='pointer'
                    fontSize={{ xl: '14px', md: '12px' }}
                    h={{ xl: '33px', md: '24px' }}
                >
                    Готовить
                </Button>
            </Flex>
        </Box>
    </Box>
);

export default JuiciestCard;
