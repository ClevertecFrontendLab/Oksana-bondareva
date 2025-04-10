export interface RecipeCardProps {
    id: string | null | undefined;
    title: string;
    description: string;
    imageUrl?: string;
    tag: string;
    tagIcon: string;
    favorites?: number | null;
    likes?: number | null;
    isRecommended?: boolean;
    recommendedBy?: {
        avatar: string;
        name: string;
    };
}

export interface RecipeListProps {
    recipes: RecipeCardProps[];
}

export interface AuthorCardProps {
    author: {
        avatarUrl: string;
        name: string;
        username: string;
    };
    content: {
        description: string;
    };
}

export interface AuthorsListProps {
    authors: AuthorCardProps[];
}

export interface MenuSideItem {
    icon?: string;
    alt?: string;
    label: string;
    children?: MenuSideItem[];
}
