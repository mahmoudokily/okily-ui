import React, { createContext, PropsWithChildren } from 'react';
import { AssetDomains } from './assets';

type Props = {
      elements: any

};

const AssetContext = createContext<{}>({
});

const { Provider } = AssetContext;

const AssetProvider: React.FC<PropsWithChildren<Props>> = ({ elements, children }) => {
      return <Provider value={elements} > {children}</Provider>
};

export { AssetContext, AssetProvider };