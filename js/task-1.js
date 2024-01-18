const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`);
})
