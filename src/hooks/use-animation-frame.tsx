import { useRef, useEffect, useState, useCallback } from "react";

const useAnimationFrame = (callback: () => void, perMinuteRate: number) => {
  const callbackRef = useRef(callback);
  const frameRef = useRef<number | null>(null);
  const lastExecutionTimeRef = useRef<number>(0);
  const interval = 60000 / perMinuteRate;

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const loop = useCallback(
    (time: number) => {
      if (time - lastExecutionTimeRef.current >= interval) {
        callbackRef.current();
        lastExecutionTimeRef.current = time;
      }
      if (isRunning) {
        frameRef.current = requestAnimationFrame(loop);
      }
    },
    [interval, isRunning],
  );

  const start = useCallback(() => {
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

  useEffect(() => {
    if (isRunning) {
      frameRef.current = requestAnimationFrame(loop);
    }
  }, [isRunning, loop]);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return { start, stop, isRunning };
};

export default useAnimationFrame;
