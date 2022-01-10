export class Product {
    constructor(
        public id: number = 0,
        public name: string = '',
        public description: string = '',
        public rating: number = 0,
        public category: string = '',
        public price_before?: number,
        public price: number = 0,
        public inventoryStatus: string = '',
        public img: string = '',
        public full_description: string = '',
    ) { }
}