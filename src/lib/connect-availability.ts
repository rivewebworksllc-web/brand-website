export function isConnectDeliveryEnabled(value = process.env.CONNECT_DELIVERY_ENABLED) {
  return value === "true";
}
