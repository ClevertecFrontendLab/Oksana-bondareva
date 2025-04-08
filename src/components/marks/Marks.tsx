import { Flex, Text } from '@chakra-ui/react';

import { LikesIcon } from '../icons/LikesIcon';

export const Marks = () => (
    <Flex>
        <Flex gap='8px'>
            <LikesIcon />
            <Text fontSize='16px' color='#2DB100'>
                185
            </Text>
        </Flex>
    </Flex>
);
