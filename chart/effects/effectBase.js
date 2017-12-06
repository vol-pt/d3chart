export class EffectBase {
	constructor() {
		if (new.target === EffectBase) {
			throw new Error('Effect Base is abstract');
		}
		if (this.applyEffect === undefined) {
			throw new Error('Effect must implement applyEffect method');
		}
		if (this.removeEffect === undefined) {
			throw new Error('Effect must implement removeEffect method');
		}
	}
}