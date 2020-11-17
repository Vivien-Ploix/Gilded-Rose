class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality(x){
    this.quality += x;
    if (this.quality > 50) { this.quality = 50}
    if (this.quality < 0) {this.quality = 0}
  }
}



class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.map(item => {
      item.sellIn -= 1;
      if(item.name === "Sulfuras") {
        this.sulfuraUpdate(item)
      } else if (item.name === "Aged Brie") {
        this.agedBrieUpdate(item)
      } else if (item.name.includes("Backstage passes")) {
        this.backstageUpdate(item)
      } else if (item.name.startsWith("Conjured")) {
        this.conjuredItemUpdate(item)
      } else {
        this.otherItemUpdate(item)
      }
    })
    return this.items;
  }

  agedBrieUpdate(item){
    item.updateQuality(1)
  }

  backstageUpdate(item){
    if (item.sellIn > 10) { 
      item.updateQuality(1)
    } else if (item.sellIn <= 10 && item.sellIn > 5) {
      item.updateQuality(2);
    } else if (item.sellIn <= 5 && item.sellIn > 0) {
      item.updateQuality(3)
    } else if (item.sellIn <= 0) {
      item.quality = 0;
    }
  }

  sulfuraUpdate(item){
    item.quality = 80;
  }

  conjuredItemUpdate(item){
    if (item.sellIn > 0) {
      item.updateQuality(-2);
    } else {
      item.updateQuality(-4);
    }
  }

  otherItemUpdate(item){
    if (item.sellIn > 0) {
      item.updateQuality(-1);
    } else {
      item.updateQuality(-2)
    }
  }

}
module.exports = {
  Item,
  Shop
}
