import { createApi, createEvent, createStore, forward } from 'effector';

const $store = createStore<any>({});

const { setStore } = createApi($store, {
  setStore: (store: any, payload: any) => {
    return { ...store, ...payload };
  },
});

const setStoreEv = createEvent();

forward({ from: setStoreEv, to: setStore });

export { $store, setStoreEv };
