const CUNRRECY_FORMATTER = new Intl.NumberFormat(undefined, {currency:"USD", style: "currency"})

export function formatCurrency (number: number) {
    return CUNRRECY_FORMATTER.format(number)
}