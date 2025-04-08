// components/UserProfile.tsx
import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface UserProfileProps {
    avatarUrl: string;
    name: string;
    username: string;
}

export const UserProfile = ({ avatarUrl, name, username }: UserProfileProps) => (
    <Flex alignItems='center' gap='12px'>
        <Image src={avatarUrl} alt={`Аватар ${name}`} objectFit='cover' />
        <Box textAlign='left'>
            <Text fontWeight='500'>{name}</Text>
            <Text color='#000000A3'>@{username}</Text>
        </Box>
    </Flex>
);
