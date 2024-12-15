export interface IThrottleOptions {
  noTrailing?: boolean;
  noLeading?: boolean;
  debounceMode?: boolean;
}

export interface IDebounceOptions {
  atBegin?: boolean;
}

interface CancelOptions {
  upcomingOnly?: boolean;
}

/*
 * https://github.com/niksy/throttle-debounce/blob/master/throttle.js
 */
export function throttle <T extends (...args: any[]) => any>(delay: number, callback: T, options: IThrottleOptions = {}) {
  const {
    noTrailing = false,
    noLeading = false,
    debounceMode = undefined
  } = options;

  let timeoutID: NodeJS.Timeout | null = null;
  let cancelled = false;

  let lastExec = 0;

  function clearExistingTimeout () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }

  function cancel (options: CancelOptions = {}) {
    const { upcomingOnly = false } = options;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }

  function wrapper (...arguments_: Array<any>) {
    // @ts-ignore
    const self = this;
    const elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    }

    function exec () {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }

    function clear () {
      timeoutID = null;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        lastExec = Date.now();
        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        exec();
      }
    } else if (!noTrailing) {
      timeoutID = setTimeout(
        debounceMode ? clear : exec,
        debounceMode === undefined ? delay - elapsed : delay
      );
    }
  }

  wrapper.cancel = cancel;

  return wrapper;
}

/*
 * https://github.com/niksy/throttle-debounce/blob/master/debounce.js
 */
export function debounce <T extends (...args: any[]) => any>(delay: number, callback: T, options: IDebounceOptions = {}) {
  const { atBegin = false } = options;

  return throttle(delay, callback, {
    debounceMode: atBegin
  });
}
