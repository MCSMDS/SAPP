import Provider from './components/Provider';
import connect from './connect/connect';
import { setBatch } from './utils/batch';
import { unstable_batchedUpdates as batch } from 'react-dom';
setBatch(batch);
export { Provider, connect };