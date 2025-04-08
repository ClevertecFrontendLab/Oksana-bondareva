import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { ButtonCook } from '../buttonCook/ButtonCook';
import MiniCard from '../Cards/MiniCard';

export const VeganKitchen = () => (
    <Box px='24px'>
        <Flex justifyContent='space-between' alignItems='center' borderTop='1px solid #00000014'>
            <Heading as='h2' fontSize='48px' py='12px' fontWeight='500' textAlign='left'>
                Веганская кухня
            </Heading>
            <Text color='#000000A3' fontSize='16px' maxW='668px' textAlign='left'>
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </Text>
        </Flex>
        <Flex gap='24px' pt='12px'>
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
                        <Image src='/icons/fryingPan.svg' alt='frying pan' />
                        <Text fontSize='20px' fontWeight='500'>
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
                    px='24px'
                    py='14px'
                >
                    <Flex w='70%' gap='12px'>
                        <Image src='/icons/fryingPan.svg' alt='frying pan' />
                        <Text fontSize='20px' fontWeight='500'>
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
                    px='24px'
                    py='14px'
                >
                    <Flex w='70%' gap='12px'>
                        <Image src='/icons/pot.svg' alt='pot' />
                        <Text fontSize='20px' fontWeight='500'>
                            Сырный суп с лапшой и брокколи
                        </Text>
                    </Flex>
                    <ButtonCook />
                </Flex>
            </Flex>
        </Flex>
    </Box>
);
