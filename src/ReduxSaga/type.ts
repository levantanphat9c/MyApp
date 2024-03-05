import {PersistConfig} from 'redux-persist';

export interface IPersistConfig<S, RS = any, HSS = any, ESS = any>
  extends PersistConfig<S, RS, HSS, ESS> {
  readonly whitelist?: Extract<keyof S, string>[];
  readonly blacklist?: Extract<keyof S, string>[];
}
