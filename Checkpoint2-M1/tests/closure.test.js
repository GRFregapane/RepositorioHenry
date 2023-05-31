const { arribaAbajo, closureNacionality } = require('../repaso'); // Replace with the actual file name where the function is defined

describe('arribaAbajo', () => {
  it('Debe retornar una función que incremente a num cuando num sea menor a 50', () => {
    const numLessThan50 = 40;
    const increment = arribaAbajo(numLessThan50);

    expect(increment()).toBe(41);
    expect(increment()).toBe(42);
  });

  it('Debe retornar una función que decremente num cuando num sea mayor o igual a 50', () => {
    const numGreaterThan50 = 60;
    const decrement = arribaAbajo(numGreaterThan50);

    expect(decrement()).toBe(59);
    expect(decrement()).toBe(58);
  });
});

describe('closureNacionality', () => {
  const personWithMinimumNationalities = {
    name: "Ronaldo",
    tip: ["aguacate", "caribe", "Shakira", "Tayrona"]
  };
  const personWithMinimumNationalities2 = {
    name: "Marcelina",
    tip: ["fresa", "Tayrona", "mate", "palta"],
  };

  const nacColombia = [
    "fresa",
    "Tayrona",
    "Caribe",
    "aguacate",
    "cafe",
    "piña",
    "Shakira",
  ];
  const nacArgentina = [
    "frutilla",
    "Cataratas",
    "mate",
    "palta",
    "L-gante",
    "anana",
  ];
  const nacPersona = closureNacionality(nacColombia, 3);
  const nacPersona2 = closureNacionality(nacArgentina, 2);

  it('Debe retornar true si la persona tiene al menos el número mínimo de nacionalidades coincidentes', () => {
    expect(nacPersona(personWithMinimumNationalities)).toBe(true);
    expect(nacPersona2(personWithMinimumNationalities2)).toBe(true);
  });

  it('Debe retornar false si la persona no tiene el número mínimo de nacionalidades coincidentes', () => {
    const personWithoutMinimumNationalities = {
      name: "Susana",
      tip: ["aguacate"]
    };
    expect(nacPersona(personWithoutMinimumNationalities)).toBe(false);
  });
});