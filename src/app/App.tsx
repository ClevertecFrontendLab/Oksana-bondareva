import './App.css';

import Header from '~/components/header/Header';
import HomePage from '~/pages/HomePage/HomePage';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <Header />
            <HomePage />
        </>
    );
}

export default App;
