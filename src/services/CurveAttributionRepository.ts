import { CATEGORIES } from '../constants/common';
import mockData from "../store/mockData.json"

interface Curve {
    id: number,
    name: string,
    alias: string,
    sourceSystem: string,
    category: string,
    updatedBy: string
}

export class CurveAttributionRepository {
    private readonly store: Array<Curve>;

    constructor() {
        const localStore = JSON.parse(localStorage.getItem('response'));

        if (!localStore) {
            localStorage.setItem('response', JSON.stringify(mockData));
        }

        this.store = JSON.parse(localStorage.getItem('response'));
    }

    readCurves(category: string): Array<Curve> {
        if (category === 'other') {
            const array: Array<string> = Object.values(CATEGORIES);
            return this.store.filter(item => !array.includes(item.category));
        }

        return this.store.filter(item => item.category === category);
    }

    writeCurves(id: number, category: string, value: string): Promise<any> {
        const index = this.store.findIndex((item) => item.id === id);
        this.store[index][category] = value;
        localStorage.setItem('response', JSON.stringify(this.store));

        return Promise.resolve();
    };
}
