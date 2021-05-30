function liteks(name, population, taxrate){
    const town = {
        name,
        population,
        treasury,
        taxRate,
        collecttaxes(){
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent){
            this.population = Math.floor(this.population * percent / 100);
        },
        applyRecesion(percent){
            this.treasury -= Math.ceil(this.population * percent/100);
        }
      }

      return town;
}
liteks(
)