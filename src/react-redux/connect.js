import hoistStatics from "hoist-non-react-statics";
import React, { useContext, useMemo, useRef, useReducer, useLayoutEffect } from "react";
import Subscription from "./Subscription";
import Context from "./Context";
import selectorFactory from "./selectorFactory";

export default function wrapWithConnect(WrappedComponent) {
  const usePureOnlyMemo = useMemo;

  function ConnectFunction(props) {
    const contextValue = useContext(Context);
    const store = contextValue.store;
    const childPropsSelector = useMemo(() => selectorFactory(store.dispatch), [store]);
    const subscription = new Subscription(store, contextValue.subscription);
    const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
    const [previousStateUpdateResult, forceComponentUpdateDispatch] = useReducer((state, action) => action.payload, null);
    const lastChildProps = useRef();
    const lastWrapperProps = useRef(props);
    const childPropsFromStoreUpdate = useRef();
    const renderIsScheduled = useRef(false);

    const actualChildProps = usePureOnlyMemo(() => {
      if (childPropsFromStoreUpdate.current && props === lastWrapperProps.current) return childPropsFromStoreUpdate.current;
      return childPropsSelector(store.getState(), props);
    }, [store, previousStateUpdateResult, props]);

    useLayoutEffect(() => {
      lastWrapperProps.current = props;
      lastChildProps.current = actualChildProps;
      renderIsScheduled.current = false;
      childPropsFromStoreUpdate.current = null;
      notifyNestedSubs();
    });

    useLayoutEffect(() => {
      let didUnsubscribe = false;
      const checkForUpdates = () => {
        if (didUnsubscribe) return;
        let newChildProps = childPropsSelector(
          store.getState(),
          lastWrapperProps.current
        );
        if (newChildProps === lastChildProps.current) {
          if (!renderIsScheduled.current) notifyNestedSubs();
        } else {
          lastChildProps.current = newChildProps;
          childPropsFromStoreUpdate.current = newChildProps;
          renderIsScheduled.current = true;
          forceComponentUpdateDispatch({ type: "STORE_UPDATED", payload: {} });
        }
      };
      subscription.onStateChange = checkForUpdates;
      subscription.trySubscribe();
      checkForUpdates();
      return () => {
        didUnsubscribe = true;
        subscription.tryUnsubscribe();
        subscription.onStateChange = null;
      };
    }, [store, subscription, childPropsSelector, notifyNestedSubs]);

    return <Context.Provider value={{ ...contextValue, subscription }}><WrappedComponent {...actualChildProps} /></Context.Provider>;
  }

  return hoistStatics(React.memo(ConnectFunction), WrappedComponent);
}