import { Alert } from "@/ui";

export function WarningInvestAmountAlert() {
  return (
    <Alert.Root variant="warning" size="small">
      <Alert.Title>
        Para projetos com urgência, será aplicada uma taxa adicional.
      </Alert.Title>
    </Alert.Root>
  );
}
