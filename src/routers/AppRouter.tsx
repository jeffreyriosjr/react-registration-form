import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import Header from '../components/Header';
const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='container-fluid'>
        <Switch>
        <Route path='/' exact component={HomePage} />
        
        </Switch>
      </div>
    </div>
  );
};

export default AppRouter;