import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { ButtonCook } from '../buttons/ButtonCook';
import MiniCard from '../cards/MiniCard';

export const VeganKitchen = () => (
    <Box ml={{ xl: '2px', md: '0px' }}>
        <Flex
            justifyContent='space-between'
            flexDirection={{ xl: 'row', md: 'column' }}
            alignItems={{ xl: 'center', md: 'left' }}
            borderTop='1px solid #00000014'
        >
            <Heading
                as='h2'
                fontSize={{ xl: '48px', md: '24px' }}
                pt={{ xl: '16px', md: '10px' }}
                pb={{ xl: '10px', md: '4px' }}
                fontWeight='500'
                textAlign='left'
                letterSpacing={1.8}
            >
                Веганская кухня
            </Heading>
            <Text
                color='#000000A3'
                fontSize={{ xl: '16px', md: '14px' }}
                maxW={{ xl: '660px', md: '100%' }}
                textAlign='left'
                pt='8px'
            >
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </Text>
        </Flex>
        <Flex gap={{ xl: '21px', md: '12px' }} pt={{ xl: '12px', md: '15px' }}>
            <MiniCard
                id='1'
                title='Картошка, тушенная с болгарским перцем и фасолью в томатном соусе'
                description='Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.'
                tag='Вторые блюда'
                tagIcon='/icons/fryingPan.svg'
                likes={1}
                favorites={1}
            />
            <MiniCard
                id='2'
                title='Капустные котлеты'
                description='Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.'
                tag='Вторые блюда'
                tagIcon='/icons/fryingPan.svg'
                likes={1}
                favorites={2}
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
                    pr={{ xl: '20px', md: '12px' }}
                    py='9px'
                >
                    <Flex gap='12px'>
                        <Image src='/icons/fryingPan.svg' alt='frying pan' />
                        <Text
                            fontSize={{ xl: '20px', md: '16px' }}
                            fontWeight='500'
                            noOfLines={1}
                            textAlign='left'
                        >
                            Стейк для вегетарианцев
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
                    pl={{ xl: '24px', md: '11px' }}
                    pr={{ xl: '20px', md: '12px' }}
                    py='9px'
                >
                    <Flex gap='12px'>
                        <Image src='/icons/fryingPan.svg' alt='frying pan' />
                        <Text
                            fontSize={{ xl: '20px', md: '16px' }}
                            fontWeight='500'
                            noOfLines={1}
                            textAlign='left'
                        >
                            Котлеты из гречки и фасоли
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
                    pl={{ xl: '24px', md: '11px' }}
                    pr={{ xl: '20px', md: '12px' }}
                    py='9px'
                >
                    <Flex gap='12px'>
                        <Image src='/icons/pot.svg' alt='pot' />
                        <Text
                            fontSize={{ xl: '20px', md: '16px' }}
                            fontWeight='500'
                            noOfLines={1}
                            textAlign='left'
                        >
                            Сырный суп с лапшой и брокколи
                        </Text>
                    </Flex>
                    <ButtonCook />
                </Flex>
            </Flex>
        </Flex>
    </Box>
);
