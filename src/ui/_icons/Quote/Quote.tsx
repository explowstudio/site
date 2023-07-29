import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "@phosphor-icons/react";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M55.9424 63.6786C86.7193 63.6786 111.658 88.6062 111.658 119.369C111.658 150.132 86.7193 175.06 55.9424 175.06C25.1656 175.06 0.226717 150.132 0.226717 119.369L0 111.438C0 49.9118 49.9344 0 111.488 0V31.8393C90.2334 31.8393 70.2256 40.1107 55.1489 55.1239C52.2583 58.0133 49.5944 61.0725 47.2138 64.3018C50.0478 63.8486 52.9384 63.622 55.9424 63.6786ZM199.284 63.6786C230.061 63.6786 255 88.6062 255 119.369C255 150.132 230.061 175.06 199.284 175.06C168.507 175.06 143.569 150.132 143.569 119.369L143.342 111.438C143.342 49.9118 193.276 0 254.83 0V31.8393C233.575 31.8393 213.567 40.1107 198.491 55.1239C195.6 58.0133 192.936 61.0725 190.556 64.3018C193.39 63.8486 196.28 63.622 199.284 63.6786Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <path d="M55.9424 63.6786C86.7193 63.6786 111.658 88.6062 111.658 119.369C111.658 150.132 86.7193 175.06 55.9424 175.06C25.1656 175.06 0.226717 150.132 0.226717 119.369L0 111.438C0 49.9118 49.9344 0 111.488 0V31.8393C90.2334 31.8393 70.2256 40.1107 55.1489 55.1239C52.2583 58.0133 49.5944 61.0725 47.2138 64.3018C50.0478 63.8486 52.9384 63.622 55.9424 63.6786ZM199.284 63.6786C230.061 63.6786 255 88.6062 255 119.369C255 150.132 230.061 175.06 199.284 175.06C168.507 175.06 143.569 150.132 143.569 119.369L143.342 111.438C143.342 49.9118 193.276 0 254.83 0V31.8393C233.575 31.8393 213.567 40.1107 198.491 55.1239C195.6 58.0133 192.936 61.0725 190.556 64.3018C193.39 63.8486 196.28 63.622 199.284 63.6786Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M55.9424 63.6786C86.7193 63.6786 111.658 88.6062 111.658 119.369C111.658 150.132 86.7193 175.06 55.9424 175.06C25.1656 175.06 0.226717 150.132 0.226717 119.369L0 111.438C0 49.9118 49.9344 0 111.488 0V31.8393C90.2334 31.8393 70.2256 40.1107 55.1489 55.1239C52.2583 58.0133 49.5944 61.0725 47.2138 64.3018C50.0478 63.8486 52.9384 63.622 55.9424 63.6786ZM199.284 63.6786C230.061 63.6786 255 88.6062 255 119.369C255 150.132 230.061 175.06 199.284 175.06C168.507 175.06 143.569 150.132 143.569 119.369L143.342 111.438C143.342 49.9118 193.276 0 254.83 0V31.8393C233.575 31.8393 213.567 40.1107 198.491 55.1239C195.6 58.0133 192.936 61.0725 190.556 64.3018C193.39 63.8486 196.28 63.622 199.284 63.6786Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M55.9424 63.6786C86.7193 63.6786 111.658 88.6062 111.658 119.369C111.658 150.132 86.7193 175.06 55.9424 175.06C25.1656 175.06 0.226717 150.132 0.226717 119.369L0 111.438C0 49.9118 49.9344 0 111.488 0V31.8393C90.2334 31.8393 70.2256 40.1107 55.1489 55.1239C52.2583 58.0133 49.5944 61.0725 47.2138 64.3018C50.0478 63.8486 52.9384 63.622 55.9424 63.6786ZM199.284 63.6786C230.061 63.6786 255 88.6062 255 119.369C255 150.132 230.061 175.06 199.284 175.06C168.507 175.06 143.569 150.132 143.569 119.369L143.342 111.438C143.342 49.9118 193.276 0 254.83 0V31.8393C233.575 31.8393 213.567 40.1107 198.491 55.1239C195.6 58.0133 192.936 61.0725 190.556 64.3018C193.39 63.8486 196.28 63.622 199.284 63.6786Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M55.9424 63.6786C86.7193 63.6786 111.658 88.6062 111.658 119.369C111.658 150.132 86.7193 175.06 55.9424 175.06C25.1656 175.06 0.226717 150.132 0.226717 119.369L0 111.438C0 49.9118 49.9344 0 111.488 0V31.8393C90.2334 31.8393 70.2256 40.1107 55.1489 55.1239C52.2583 58.0133 49.5944 61.0725 47.2138 64.3018C50.0478 63.8486 52.9384 63.622 55.9424 63.6786ZM199.284 63.6786C230.061 63.6786 255 88.6062 255 119.369C255 150.132 230.061 175.06 199.284 175.06C168.507 175.06 143.569 150.132 143.569 119.369L143.342 111.438C143.342 49.9118 193.276 0 254.83 0V31.8393C233.575 31.8393 213.567 40.1107 198.491 55.1239C195.6 58.0133 192.936 61.0725 190.556 64.3018C193.39 63.8486 196.28 63.622 199.284 63.6786Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M55.9424 63.6786C86.7193 63.6786 111.658 88.6062 111.658 119.369C111.658 150.132 86.7193 175.06 55.9424 175.06C25.1656 175.06 0.226717 150.132 0.226717 119.369L0 111.438C0 49.9118 49.9344 0 111.488 0V31.8393C90.2334 31.8393 70.2256 40.1107 55.1489 55.1239C52.2583 58.0133 49.5944 61.0725 47.2138 64.3018C50.0478 63.8486 52.9384 63.622 55.9424 63.6786ZM199.284 63.6786C230.061 63.6786 255 88.6062 255 119.369C255 150.132 230.061 175.06 199.284 175.06C168.507 175.06 143.569 150.132 143.569 119.369L143.342 111.438C143.342 49.9118 193.276 0 254.83 0V31.8393C233.575 31.8393 213.567 40.1107 198.491 55.1239C195.6 58.0133 192.936 61.0725 190.556 64.3018C193.39 63.8486 196.28 63.622 199.284 63.6786Z" />
    </>,
  ],
]);

export const Quote: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

Quote.displayName = "Quote";