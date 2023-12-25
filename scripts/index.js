let bagItems;

onLoad();

function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  dispalyItemsOnHomePage();
  dispayBagItemsCount();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  dispayBagItemsCount();
}

function dispayBagItemsCount(){
  let bagItemsCountElement = document.querySelector('.bag-items-count');
  bagItemsCountElement.innerText = bagItems.length;
}


// Generating Items dynamically from the items array.

function dispalyItemsOnHomePage(){

  let itemsElement = document.querySelector('.items-container');

  if(!itemsElement){
    return;
  }

  let innerHtml = "";

  items.forEach(item => {
    innerHtml += `<div class="item-container">
    <img class="item-image" src="${item.image}" alt="item Image" />
    <div class="rating"> ${item.rating.stars} ⭐ | ${item.rating.count}</div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
      <span class="current-price" ₹ ${item.current_price}</span>
      <span class="original-price">₹ ${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-to-bag" onclick = addToBag(${item.id}) >Add to Bag</button>
  </div>`
  });

  itemsElement.innerHTML = innerHtml;

}