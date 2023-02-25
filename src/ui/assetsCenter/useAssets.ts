import { useContext } from 'react';

import { AssetDomain, AssetDomains, AssetName } from './assets';
import { AssetContext } from './AssetProvider';

export function useAssetsDomains() {
      const assets = useContext(AssetContext);
      return assets || {}
}

export function useAssets<T extends AssetDomain>(domain: T): AssetDomains[T] {
      const assets = useAssetsDomains();
      return assets || {};
}

export function useAsset<T extends AssetDomain>(domain: T, name: AssetName<T>) {
      const domainAssets = useAssets(domain);
      return domainAssets[name];
}