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
  
  agedBrieUpdate(){
    this.updateQuality(1)
  }

  backstageUpdate(){
    if (this.sellIn > 10) { 
      this.updateQuality(1)
    } else if (this.sellIn <= 10 && this.sellIn > 5) {
      this.updateQuality(2);
    } else if (this.sellIn <= 5 && this.sellIn > 0) {
      this.updateQuality(3)
    } else if (this.sellIn <= 0) {
      this.quality = 0;
    }
  }

  sulfuraUpdate(){
    this.quality = 80;
  }

  conjuredItemUpdate(){
    if (this.sellIn > 0) {
      this.updateQuality(-2);
    } else {
      this.updateQuality(-4);
    }
  }

  otherItemUpdate(){
    if (this.sellIn > 0) {
      this.updateQuality(-1);
    } else {
      this.updateQuality(-2)
    }
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
        item.sulfuraUpdate()
      } else if (item.name === "Aged Brie") {
        item.agedBrieUpdate()
      } else if (item.name.includes("Backstage passes")) {
        item.backstageUpdate()
      } else if (item.name.startsWith("Conjured")) {
        item.conjuredItemUpdate()
      } else {
        item.otherItemUpdate()
      }
    })
    return this.items;
  }

}
module.exports = {
  Item,
  Shop
}
