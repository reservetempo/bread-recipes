// Nutrition per 100 g (USDA FoodData Central / typical label values).
// kcal, protein, fat, carbs (total), fiber, sugar, sodium (mg).
// cup = grams in one US cup, used when an amount is given in cups.
export const FOODS = {
  "psyllium husk":     { kcal: 350, protein: 2,    fat: 0.5,  carbs: 85,   fiber: 80,   sugar: 0,   sodium: 50 },
  "ground flax":         { kcal: 534, protein: 18.3, fat: 42.2, carbs: 28.9, fiber: 27.3, sugar: 1.6, sodium: 30 },
  "hemp flour":        { kcal: 350, protein: 33,   fat: 11,   carbs: 35,   fiber: 30,   sugar: 2,   sodium: 10 },
  "buckwheat flour":   { kcal: 335, protein: 12.6, fat: 3.1,  carbs: 70.6, fiber: 10,   sugar: 2.6, sodium: 11 },
  "sorghum flour":     { kcal: 359, protein: 8.4,  fat: 3.3,  carbs: 76.6, fiber: 6.6,  sugar: 1.9, sodium: 3 },
  "brown rice flour":  { kcal: 363, protein: 7.2,  fat: 2.8,  carbs: 76.5, fiber: 4.6,  sugar: 0.9, sodium: 8 },
  "water":             { kcal: 0,   protein: 0,    fat: 0,    carbs: 0,    fiber: 0,    sugar: 0,   sodium: 0 },
  "salt":              { kcal: 0,   protein: 0,    fat: 0,    carbs: 0,    fiber: 0,    sugar: 0,   sodium: 38758 },
  "apple cider vinegar": { kcal: 21, protein: 0,   fat: 0,    carbs: 0.9,  fiber: 0,    sugar: 0.4, sodium: 5 },
  "brown sugar":       { kcal: 380, protein: 0.1,  fat: 0,    carbs: 98,   fiber: 0,    sugar: 97,  sodium: 28 },
  "instant yeast":     { kcal: 325, protein: 40.4, fat: 7.6,  carbs: 41.2, fiber: 26.9, sugar: 0,   sodium: 51 },
  "pumpkin seeds":     { kcal: 559, protein: 30.2, fat: 49.1, carbs: 10.7, fiber: 6,    sugar: 1.4, sodium: 7,  cup: 129 },
  "sesame seeds":      { kcal: 573, protein: 17.7, fat: 49.7, carbs: 23.4, fiber: 11.8, sugar: 0.3, sodium: 11, cup: 144 },
  "sunflower seeds":   { kcal: 584, protein: 20.8, fat: 51.5, carbs: 20,   fiber: 8.6,  sugar: 2.6, sodium: 9,  cup: 140 },
  "teff":              { kcal: 367, protein: 13.3, fat: 2.4,  carbs: 73.1, fiber: 8,    sugar: 1.8, sodium: 12, cup: 193 },
  "walnuts":           { kcal: 654, protein: 15.2, fat: 65.2, carbs: 13.7, fiber: 6.7,  sugar: 2.6, sodium: 2,  cup: 117 },
};

// Weight lost in the oven, used to estimate the baked weight.
export const BAKE_LOSS = 0.12;

// One entry per batch, newest first.
// An ingredient with `oneOf` is a choice that changes week to week:
// its nutrition is the average of the options (each at the given amount).
export const BATCHES = [
  {
    date: "2026-11-22",
    title: "Seeded gluten-free sourdough",
    note: "200 g of the flour comes from the sourdough starter.",
    loaves: 4,
    slicesPerLoaf: 14,
    ingredients: [
      { grams: 110, food: "psyllium husk" },
      { grams: 210, food: "ground flax" },
      { grams: 60, food: "hemp flour" },
      { grams: 1730, label: "flour", oneOf: ["buckwheat flour", "sorghum flour", "brown rice flour"] },
      { grams: 2600, food: "water" },
      { grams: 43, food: "salt" },
      { grams: 60, food: "apple cider vinegar" },
      { grams: 80, food: "brown sugar" },
      { cups: 6, label: "seeds", oneOf: ["pumpkin seeds", "sesame seeds", "sunflower seeds", "teff", "walnuts"] },
      { grams: 9, food: "instant yeast", shown: "1 tbsp" },
    ],
    healthy:
      "A very good everyday bread: about 2½× the fibre of white bread, no refined wheat, " +
      "and most of the fat is unsaturated, with a good dose of omega-3 from the ground flax (grinding is what makes it absorbable) and walnuts. " +
      "Added sugar is under 2 g per 100 g and sodium is below most store loaves.",
    improve:
      "Protein is only moderate, so lean the flour toward buckwheat (and the seeds toward pumpkin) rather than brown rice. " +
      "Doubling the hemp flour (it is about a third protein) would be the easiest protein boost. " +
      "The brown sugar could be halved; the sourdough and yeast don't need 80 g.",
  },
];
