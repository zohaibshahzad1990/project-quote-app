export interface LinetItem {
    categoryPositionId: number;
    categoryPosition: number;
    itemDescription: string;
    uom: string;
    pricePerQuantity: number;
    quantity: number;
    waste: number;
    marginId: number;
    cost: number;
    totalExGst: number;
    total: number;
    marginAmount: number;
    gstAmount: number;
}

export interface LinetItemCategory {
    id: number;
    name: string;
    totalExGst: number;
    total: number;
    gstAmount: number;
    marginAmount: number;
    linetItem: LinetItem[];
}

export interface ProjectDetail {
    grandTotal: number;
    linetItemCategory: LinetItemCategory[];
}