import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import * as streetViewPanoramaPromise from '../src/composables/street-view-panorama-promise';

describe('street-view-panorama-promise.ts', () => {
  beforeEach(() => {
    vi.mock('vue', () => ({
      inject: vi.fn(() => Promise.resolve(undefined)),
      ref: vi.fn(() => ({ value: undefined })),
      reactive: vi.fn((args) => args),
    }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should export two function when is called', () => {
    // Arrange
    // Act
    const keys = Object.keys(streetViewPanoramaPromise);

    // Assert
    expect(keys.length).toBe(2);
    expect(keys.includes('useStreetViewPanoramaPromise')).toBeTruthy();
    expect(keys.includes('useStreetViewPanoramaPromiseDeferred')).toBeTruthy();
  });

  test('should return a object with resolve and reject properties when is called', () => {
    // Arrange
    // Act
    const result =
      streetViewPanoramaPromise.useStreetViewPanoramaPromiseDeferred();
    const keys = Object.keys(result);

    // Assert
    expect(keys.includes('resolve')).toBeTruthy();
    expect(keys.includes('reject')).toBeTruthy();
  });

  test('should return a promise object when is called', () => {
    // Arrange
    // Act
    const result = streetViewPanoramaPromise.useStreetViewPanoramaPromise();

    // Assert
    expect(typeof result).toBe('object');
    expect(result).toBeInstanceOf(Promise);
  });
});
