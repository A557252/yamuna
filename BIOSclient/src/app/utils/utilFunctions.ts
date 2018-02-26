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
    public static isUserLoggedIn() {
        let userDetailObj = JSON.parse(this.getLocalStorage('userDetail'));
        if (userDetailObj) {
          return userDetailObj;
        } else {
          return false;
        }
    }
}