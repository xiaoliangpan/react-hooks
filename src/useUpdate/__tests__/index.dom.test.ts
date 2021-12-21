import { renderHook, act } from '@testing-library/react-hooks';
import { useUpdate } from '../index';

describe('useUpdate', () => {
  it('should be defined', () => {
    expect(useUpdate).toBeDefined();
  });

  it('should update', () => {
    let count = 0;

    const hooks = renderHook(() => {
      const update = useUpdate();

      return {
        update,
        count,
        onChange:() => {
          count++;
          update();
        },
      };
    });

    expect(hooks.result.current.count).toEqual(0);
    act(hooks.result.current.onChange);
    expect(hooks.result.current.count).toEqual(1);
  });
});