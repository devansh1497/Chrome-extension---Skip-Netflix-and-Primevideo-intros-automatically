
const config = { attributes: true, childList: true, subtree: true };
console.log('called')
const callback = list => {
    for(const mut of list){
        if(mut.addedNodes && mut.addedNodes[0]){
            //For prime
            var ele = $(".f1oordr3.f989gul.f1ap0gh8.fq4bwzw.f1ns8ocy.fx1l1v6.f19qnh9o");
            if(ele && ele[0]){
                ele[0].click();
            }
            //For netflix
            var ele = $(".nf-icon-button.nf-flat-button.nf-flat-button-uppercase.no-icon");
            if(ele && ele[0]){
                ele[0].click();
        }
        }
    }
};
const obs = new MutationObserver(callback);
obs.observe(document.body, config);
