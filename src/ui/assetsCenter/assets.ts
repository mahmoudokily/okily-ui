export type AssetDomainObject = Record<string, string | number | ((props: any) => JSX.Element)>;

export interface AssetDomains {
      svg: AssetDomainObject;
}

export type AssetDomain = keyof AssetDomains;

export type AssetName<T extends AssetDomain> = keyof AssetDomains[T];

export type RemoteAssetDomain = {
      [name: string]: {
            url: string;
            active: boolean;
      };
};

