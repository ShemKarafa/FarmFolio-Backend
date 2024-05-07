// contains data on cow class
class Cow {
 constructor(id, name, milkProduction, ageMonths, feedType, weightKg) {
  this.id = id;
  this.name = name;
  this.milkProduction = milkProduction;
  this.ageMonths = ageMonths;
  this.feedType = feedType;
  this.weightKg = weightKg;
 }
}

module.exports = Cow;