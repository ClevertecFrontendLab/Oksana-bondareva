import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { ButtonCook } from '../buttons/ButtonCook';
import MiniCard from '../Cards/MiniCard';

export const Desserts = () => (
    <Box px='24px'>
        <Flex justifyContent='space-between' alignItems='center' borderTop='1px solid #00000014'>
            <Heading as='h2' fontSize='48px' py='12px' fontWeight='500' textAlign='left'>
                Десерты, выпечка
            </Heading>
            <Text color='#000000A3' fontSize='16px' maxW='668px' textAlign='left'>
                Без них невозможно представить себе ни современную, ни традиционную кулинарию.
                Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из
                теста многообразны и невероятно популярны.
            </Text>
        </Flex>
        <Flex gap='24px' pt='12px'>
            <MiniCard
                id='1'
                title='Бананово-молочное желе'
                description='Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.'
                tag='Детские блюда'
                tagIcon='/icons/child.svg'
                likes={1}
                favorites={1}
            />
            <MiniCard
                id='2'
                title='Нежный сливочно-сырный крем для кексов'
                description='Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.'
                tag='Детские блюда'
                tagIcon='/icons/child.svg'
                likes={2}
                favorites={1}
            />
            <Flex flexDirection='column' w='100%' gap='12px'>
                <Flex
                    justifyContent='space-between'
                    alignItems='center'
                    borderWidth='1px'
                    borderStyle='solid'
                    borderColor='#00000014'
                    borderRadius='8px'
                    px='24px'
                    py='14px'
                >
                    <Flex w='70%' gap='12px'>
                        <Image src='/icons/child.svg' alt='frying pan' />
                        <Text fontSize='20px' fontWeight='500'>
                            Домашние сырные палочки
                        </Text>
                    </Flex>
                    <ButtonCook />
                </Flex>
                <Flex
                    justifyContent='space-between'
                    alignItems='center'
                    borderWidth='1px'
                    borderStyle='solid'
                    borderColor='#00000014'
                    borderRadius='8px'
                    px='24px'
                    py='14px'
                >
                    <Flex w='70%' gap='12px'>
                        <Image src='/icons/international-food.svg' alt='frying pan' />
                        <Text fontSize='20px' fontWeight='500'>
                            Панкейки
                        </Text>
                    </Flex>
                    <ButtonCook />
                </Flex>
                <Flex
                    justifyContent='space-between'
                    alignItems='center'
                    borderWidth='1px'
                    borderStyle='solid'
                    borderColor='#00000014'
                    borderRadius='8px'
                    px='24px'
                    py='14px'
                >
                    <Flex w='70%' gap='12px'>
                        <Image src='/icons/bayLeaf.svg' alt='pot' />
                        <Text fontSize='20px' noOfLines={1} fontWeight='500' textAlign='left'>
                            Воздушное банановое печенье на сковороде
                        </Text>
                    </Flex>
                    <ButtonCook />
                </Flex>
            </Flex>
        </Flex>
    </Box>
);
