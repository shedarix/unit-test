// __tests__/index.test.js
import { getHealthStatus } from '../src/index';

describe('getHealthStatus function', () => {
  // Тест №1: проверка случая здорового персонажа
  it('should return "healthy" when health is above 50', () => {
    const result = getHealthStatus({ name: 'Маг', health: 90 });
    expect(result).toBe('healthy');
  });

  // Тест №2: проверка раненого персонажа
  it('should return "wounded" when health is between 15 and 50 inclusive', () => {
    const result = getHealthStatus({ name: 'Маг', health: 40 });
    expect(result).toBe('wounded');
  });

  // Тест №3: проверка критического состояния
  it('should return "critical" when health is below 15', () => {
    const result = getHealthStatus({ name: 'Маг', health: 10 });
    expect(result).toBe('critical');
  });
});