import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <div className='container-fluid'>
        <Switch>
          <Route path='/'/>
        
        </Switch>
      </div>
    </div>
  );
};

export default AppRouter;