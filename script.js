document.querySelectorAll('.accordion-item_trigger').forEach((item) =>
    item.addEventListener('click',()=> {
    const parent = item.parentNode;
// parent.classList.toggle('accordion-item_active')

    if(parent.classList.contains('accordion-item_active')){
        (parent.classList.remove('accordion-item_active'))
    } else {
document.querySelectorAll('.accordion-item').forEach((child) =>child.classList.remove('accordion-item_active')
)
parent.classList.toggle('accordion-item_active')

    }
}))