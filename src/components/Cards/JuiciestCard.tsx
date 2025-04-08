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
        maxW='668px'
        border='1px solid #00000014'
        borderRadius='8px'
        overflow='hidden'
        boxShadow='md'
        display='flex'
    >
        <Box position='relative'>
            <Image src={imageUrl} alt={title} height='100%' width='346px' objectFit='cover' />
            {isRecommended && (
                <Flex
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
                    <Text fontSize='12px' fontWeight='500'>
                        {recommendedBy?.name} рекомендует
                    </Text>
                </Flex>
            )}
        </Box>
        <Box p='4' textAlign='left' pl='24px' pt='20px' maxW='274px'>
            <Flex justifyContent='space-between' mb='24px'>
                <Flex
                    background='#FFFFD3'
                    borderRadius='4px'
                    px='8px'
                    gap='8px'
                    fontSize='14px'
                    alignItems='center'
                >
                    <Image src={tagIcon} alt={title} w='16px' h='16px' />
                    <Text>{tag}</Text>
                </Flex>
                <Flex gap='15px'>
                    {favorites && (
                        <Flex align='center' gap='5px'>
                            <FavoritesIcon w='12px' h='12px' />
                            <Text fontSize='12px' color='#2DB100'>
                                {favorites}
                            </Text>
                        </Flex>
                    )}
                    {likes && (
                        <Flex align='center' gap='5px'>
                            <LikesIcon w='12px' h='12px' />
                            <Text fontSize='12px' color='#2DB100'>
                                {likes}
                            </Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
            <Heading
                fontSize='20px'
                fontWeight='500'
                whiteSpace='nowrap'
                overflow='hidden'
                textOverflow='ellipsis'
            >
                {title}
            </Heading>
            <Text fontSize='14px' noOfLines={3} mt='8px' mb='24px'>
                {description}
            </Text>
            <Flex gap='8px' justifyContent='right'>
                <Button
                    display='flex'
                    gap='8px'
                    background='white'
                    py='6px'
                    px='12px'
                    border='1px solid#0000007A'
                    borderRadius='6px'
                    cursor='pointer'
                >
                    <FavoritesIcon w='12px' h='12px' />
                    Сохранить
                </Button>
                <Button
                    background='#000000EB'
                    color='white'
                    py='6px'
                    px='12px'
                    border='1px solid #000000EB'
                    borderRadius='6px'
                    cursor='pointer'
                >
                    Готовить
                </Button>
            </Flex>
        </Box>
    </Box>
);

export default JuiciestCard;
