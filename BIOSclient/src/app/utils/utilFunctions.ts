export class UtilFunctions {

    public static setLocalStorage(type,item) {
        localStorage.setItem(type,item);
    }
    public static getLocalStorage(type) {
        return localStorage.getItem(type);
    }
    public static clearLocalStorage() {
        return localStorage.clear();
    }
}