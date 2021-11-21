import { Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ProductDetailsPage from './components/ProductDetailsPage/ProductDetailsPage';

const App = () => (
    <div className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:urlSlug" element={<ProductDetailsPage />} />
        </Routes>
    </div>
);

export default App;
