import { createApi, createEvent, createStore, forward } from 'effector';

const $store: any = createStore(null);

const { setStore } = createApi($store, {
  setStore: (store: object, payload) => {
    return { ...store, ...payload };
  },
});

const setStoreEv = createEvent();

forward({ from: setStoreEv, to: setStore });

export { $store, setStoreEv };
