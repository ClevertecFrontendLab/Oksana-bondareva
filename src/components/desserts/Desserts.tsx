import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { ButtonCook } from '../buttons/ButtonCook';
import MiniCard from '../cards/MiniCard';

export const Desserts = () => (
    <Box>
        <Flex
            justifyContent='space-between'
            flexDirection={{ xl: 'row', md: 'column' }}
            alignItems={{ xl: 'center', md: 'left' }}
            pb={{ xl: '12px', md: '0px' }}
            borderTop='1px solid #00000014'
        >
            <Heading
                as='h2'
                fontSize={{ xl: '48px', md: '24px' }}
                pt={{ xl: '0px', md: '10px' }}
                fontWeight='500'
                textAlign='left'
                letterSpacing={1.8}
            >
                Десерты, выпечка
            </Heading>
            <Text
                color='#000000A3'
                fontSize={{ xl: '16px', md: '14px' }}
                pt={{ xl: '22px', md: '12px' }}
                maxW={{ xl: '660px', md: '100%' }}
                textAlign='left'
            >
                Без них невозможно представить себе ни современную, ни традиционную кулинарию.
                Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из
                теста многообразны и невероятно популярны.
            </Text>
        </Flex>
        <Flex gap={{ xl: '24px', md: '12px' }} pt={{ xl: '12px', md: '15px' }}>
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
            <Flex flexDirection='column' w='100%' gap={{ xl: '12px', md: '6px' }}>
                <Flex
                    justifyContent='space-between'
                    alignItems='center'
                    borderWidth='1px'
                    borderStyle='solid'
                    borderColor='#00000014'
                    borderRadius='8px'
                    pl={{ xl: '24px', md: '12px' }}
                    pr={{ xl: '22px', md: '12px' }}
                    py='9px'
                >
                    <Flex gap='5px'>
                        <Image src='/icons/child.svg' alt='frying pan' />
                        <Text
                            fontSize={{ xl: '18px', md: '16px' }}
                            fontWeight='500'
                            noOfLines={1}
                            textAlign='left'
                        >
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
                    pl={{ xl: '24px', md: '12px' }}
                    pr={{ xl: '22px', md: '12px' }}
                    py='9px'
                >
                    <Flex gap='5px'>
                        <Image src='/icons/international-food.svg' alt='frying pan' />
                        <Text
                            fontSize={{ xl: '18px', md: '16px' }}
                            fontWeight='500'
                            noOfLines={1}
                            textAlign='left'
                        >
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
                    pl={{ xl: '24px', md: '12px' }}
                    pr={{ xl: '22px', md: '12px' }}
                    py='9px'
                >
                    <Flex gap='5px'>
                        <Image src='/icons/bayLeaf.svg' alt='pot' />
                        <Text
                            fontSize={{ xl: '18px', md: '16px' }}
                            noOfLines={1}
                            fontWeight='500'
                            textAlign='left'
                        >
                            Воздушное банановое печенье на сковороде
                        </Text>
                    </Flex>
                    <ButtonCook />
                </Flex>
            </Flex>
        </Flex>
    </Box>
);
