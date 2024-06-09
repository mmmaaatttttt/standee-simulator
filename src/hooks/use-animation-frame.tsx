import { useRef, useEffect, useState, useCallback } from "react";

const useAnimationFrame = (
  callback: () => void,
  endCheck: () => boolean,
  perMinuteRate: number,
) => {
  const callbackRef = useRef(callback);
  const endCheckRef = useRef(endCheck);
  const frameRef = useRef<number | null>(null);
  const lastExecutionTimeRef = useRef<number>(0);
  const interval = 60000 / perMinuteRate;

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isAtStart, setIsAtStart] = useState<boolean>(true);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    endCheckRef.current = endCheck;
  }, [endCheck]);

  const start = useCallback(() => {
    setIsAtStart(false);
    if (!isRunning) {
      setIsRunning(true);
      lastExecutionTimeRef.current = performance.now();
    }
  }, [isRunning]);

  const stop = useCallback(() => {
    setIsRunning(false);
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    stop();
    setIsAtStart(true);
    setIsFinished(false);
  }, [stop]);

  const endOrContinue = useCallback(
    (loop: (time: number) => void) => {
      if (isRunning) {
        if (endCheckRef.current()) {
          stop();
          setIsRunning(false);
          setIsFinished(true);
        } else {
          frameRef.current = requestAnimationFrame(loop);
        }
      }
    },
    [isRunning, stop],
  );

  const loop = useCallback(
    (time: number) => {
      if (time - lastExecutionTimeRef.current >= interval) {
        callbackRef.current();
        lastExecutionTimeRef.current = time;
      }
      endOrContinue(loop);
    },
    [interval, endOrContinue],
  );

  useEffect(() => {
    endOrContinue(loop);
  }, [loop, endOrContinue]);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return { start, stop, reset, isRunning, isAtStart, isFinished };
};

export default useAnimationFrame;
