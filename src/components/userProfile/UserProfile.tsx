import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface UserProfileProps {
    avatarUrl: string;
    name: string;
    username: string;
}

export const UserProfile = ({ avatarUrl, name, username }: UserProfileProps) => (
    <Flex alignItems='center' gap='12px'>
        <Image
            src={avatarUrl}
            alt={`Аватар ${name}`}
            objectFit='cover'
            w={{ xl: 'auto', md: '32px' }}
        />
        <Box textAlign='left'>
            <Text fontWeight='500' fontSize={{ xl: '18px', md: '16px' }} noOfLines={1}>
                {name}
            </Text>
            <Text color='#000000A3' fontSize={{ xl: '14px', md: '12px' }}>
                @{username}
            </Text>
        </Box>
    </Flex>
);
