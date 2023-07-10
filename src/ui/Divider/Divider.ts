import { opacify } from "polished";

import { styled, theme } from "@/ui/stitches.config";

export const Divider = styled("hr", {
  border: 0,
  borderTop: `1px solid ${opacify(1)(theme.colors.gray100.value)}`,
});
