const handler = Object.assign({
	handleEvent(e){
		if(e.type == "beforeinstallprompt"){
			e.preventDefault();
			this.installPromptEvent = e;
			this.resolve(null);
		}else if(e.type == "DOMContentLoaded"){
			this.promise.then(() => {
				const button = document.querySelector("button");
				button.disabled = false;
				button.addEventListener("click", this);
			});
		}else if(e.type == "click"){
			this.installPromptEvent.prompt();
		}
	},
	installPromptEvent: null
}, Promise.withResolvers());
addEventListener("beforeinstallprompt", handler);
document.addEventListener("DOMContentLoaded", handler);
navigator.serviceWorker.register('worker.js');