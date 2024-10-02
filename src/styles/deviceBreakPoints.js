export const DEVICE = {
  SM: "425px",
  MD: "768px",
  LG: "1024px",
  XL: "1280px",
}

export const DEVICE_BREAKPOINTS = {
  SM: `@media only screen and (min-width: ${DEVICE.SM})`,
  MD: `@media only screen and (min-width: ${DEVICE.MD})`,
  LG: `@media only screen and (min-width: ${DEVICE.LG})`,
  XL: `@media only screen and (min-width: ${DEVICE.XL})`,
}
