﻿import { 삼각형_넓이_구하기 } from './index';

describe('삼각형 유틸', () => {
  it('1, 1, 1 삼각형의 넓이 구하기', () => {
    const result = 삼각형_넓이_구하기([1, 1, 1]);
    expect(result).toBe(0.43);
  });

  it('3, 4, 5 삼각형의 넓이 구하기', () => {
    const result = 삼각형_넓이_구하기([3, 4, 5]);
    expect(result).toBe(6);
  });

  it('10, 10, 10 삼각형의 넓이 구하기', () => {
    const result = 삼각형_넓이_구하기([10, 10, 10]);
    expect(result).toBe(43.3);
  });

  it('0, 1, 1 삼각형의 넓이 구하기', () => {
    const result = 삼각형_넓이_구하기([0, 1, 1]);
    expect(result).toThrow();
  });

  it('-1, 0, 1  삼각형의 넓이 구하기', () => {
    const result = 삼각형_넓이_구하기([-1, 0, 1]);
    expect(result).toThrow();
  });
});
