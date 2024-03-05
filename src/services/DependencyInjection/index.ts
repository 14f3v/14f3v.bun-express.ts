import { APPLICATION_CONFIG } from "@configs/index";
class DependencyInjection {
    private static instance: DependencyInjection;
    constructor() {
        this.initialize();
    };
    public static getInstance(): DependencyInjection {
        if (!DependencyInjection.instance) {
            DependencyInjection.instance = new DependencyInjection();
        }
        return DependencyInjection.instance;
    };

    private initialize() {
        this.applicationInformation();
    };

    public applicationInformation() {
        console.log('[ APPLICATION RUNNING PORT ]:', APPLICATION_CONFIG.PORT);
    };

}; interface IDependencyInjection extends DependencyInjection { };

export type { IDependencyInjection };
export default DependencyInjection;
