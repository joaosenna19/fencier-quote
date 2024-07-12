export interface StepDetails {
  isActive: boolean;
  onClickNext: (nextStep: string) => void;
  quote: any[];
  onQuote: (quote: any) => void;
  onBack?: (previousStep: string) => void;
}
