class Sorteio {
    private _lista: string[] = [];

    private get sortear(): number {
        let max = this._lista.length;
        
        return Math.floor(Math.random() * (max - 0) + 0);
    }

    public set participar(value: string) {
        this._lista.push(value);
    }

    public get participantes(): string[] {
        return this._lista;
    }

    public get resultado(): string {
        return this._lista[this.sortear];
    }
}
