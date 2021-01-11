import bridge from '@vkontakte/vk-bridge';
bridge.send("VKWebAppShowNativeAds", {ad_format:"reward"})
.then(data => console.log(data.result))
.catch(error => console.log(error));