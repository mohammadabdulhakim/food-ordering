

export const formatCurrency = (price:number) =>{
    const CURRENCY_FORMATTER = new Intl.NumberFormat('eg-US', {
        currency: "USD",
        style: "currency",
    })

    return CURRENCY_FORMATTER.format(price);
}