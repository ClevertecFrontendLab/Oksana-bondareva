import { Box, Text, VStack } from '@chakra-ui/react';

import { AuthorCardProps } from '~/utils/types';

import { UserProfile } from '../userProfile/UserProfile';

export const AuthorCard = ({ author, content }: AuthorCardProps) => (
    <Box borderRadius='8px' px='24px' pt='24px' bg='white'>
        <VStack align='stretch' spacing='20px' pb='68px'>
            <UserProfile
                avatarUrl={author.avatarUrl}
                name={author.name}
                username={author.username}
            />
            <Box>
                <Text fontSize='14px' textAlign='left'>
                    {content.description}
                </Text>
            </Box>
        </VStack>
    </Box>
);
