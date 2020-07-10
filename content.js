
const config = { attributes: true, childList: true, subtree: true };
const callback = (list, obs) => {
    for(const mut of list){
        if(mut.addedNodes && mut.addedNodes[0]){
            var ele = $(".nf-icon-button.nf-flat-button.nf-flat-button-uppercase.no-icon");
            if(ele && ele[0]){
                ele[0].click();
        }
        }
    }
};
const obs = new MutationObserver(callback);
obs.observe(document.body, config);
