const getHealthStatus = ({ name, health }) => {
  if (health > 50) return 'healthy';
  if (health >= 15 && health <= 50) return 'wounded';
  return 'critical';
};

export { getHealthStatus };