export const customGetHostProtocol = () => {
  return {
    host: typeof window === 'undefined' ? null : window.location.host,
    protocol: typeof window === 'undefined' ? null : window.location.protocol,
  };
};
