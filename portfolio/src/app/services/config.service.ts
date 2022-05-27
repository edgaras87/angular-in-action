export class ConfigService {
    private static properties: Map<string, string>;

    static {
        this.properties = new Map();
    }

    public static set(property: string, value: string) :void {
        this.properties.set(property, value);
        
    }

    public static get(property: string) {
        let value = this.properties.get(property);
        if (value === undefined) {
            return "";
        } else {
            return value;
        }
    }


}