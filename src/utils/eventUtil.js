export default class EventUtil {

    constructor() {
        this.maxParentCounter = 10;
    }

    getRelatives(e) {
        let currentElement = e.target;
        const parents = [];
        if (e.target) {
          const target = e.target;
          const children = target.children ? Array.from(target.children) : [];
          let counter = this.maxParentCounter;
          while (currentElement && currentElement.parentElement && counter > 0) {
            currentElement = currentElement.parentElement;
            parents.push(currentElement);
            counter--;
            if (currentElement === e.currentTarget) {
              break;
            }
          }
          return { parents, children };
        }
        return { parents: [], children: [] };
      }
}