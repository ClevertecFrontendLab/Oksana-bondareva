import { Box, Text, VStack } from '@chakra-ui/react';

import { AuthorCardProps } from '~/utils/types';

import { UserProfile } from '../userProfile/UserProfile';

export const AuthorCard = ({ author, content }: AuthorCardProps) => (
    <Box
        borderRadius='8px'
        px={{ xl: '24px', md: 4 }}
        pt={{ xl: '24px', md: 4 }}
        pb={{ xl: '22px', md: '18px' }}
        bg='white'
    >
        <VStack align='stretch' spacing={{ xl: '24px', md: '12px' }}>
            <UserProfile
                avatarUrl={author.avatarUrl}
                name={author.name}
                username={author.username}
            />
            <Box>
                <Text fontSize='14px' textAlign='left' noOfLines={3}>
                    {content.description}
                </Text>
            </Box>
        </VStack>
    </Box>
);
