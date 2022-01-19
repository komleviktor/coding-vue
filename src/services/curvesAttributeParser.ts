import { CATEGORIES } from '../constants/common'

export class CurvesAttributeParser {
    private readonly store: Array<any>;

    constructor(data: Array<any>) {
        const localStore = JSON.parse(localStorage.getItem('response'));

        if (!localStore) {
            localStorage.setItem('response', JSON.stringify(data));
        }

        this.store = JSON.parse(localStorage.getItem('response'));
    }

    readCurves(category: string):Array<any> {
        if (category === 'other') {
            return this.store.filter(item => !Object.values(CATEGORIES).includes(item?.category));
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
