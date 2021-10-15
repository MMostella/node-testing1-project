const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const actual = utils.trimProperties(input);
    expect(input).not.toEqual(actual);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {});
  let input;
  beforeEach(() => {
    input = { fuzz: "  fuzz ", boo: "boo ", baz: " baz" };
  });
  test("[3] returns an object with the properties trimmed", () => {
    const actual = utils.trimPropertiesMutation(input);
    const expected = { fuzz: "fuzz", boo: "boo", baz: "baz" };

    expect(actual).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const actual = utils.trimPropertiesMutation(input);

    expect(input).toEqual(actual);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    let actual = utils.findLargestInteger(input);
    expect(actual).toBeDefined();
    expect(actual).toBe(3);
    expect(actual).not.toBe(1);
    expect(actual).not.toBe(2);
    expect(actual).not.toBeGreaterThan(4);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    let actual = counter.countDown();
    expect(actual).toBe(3);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    let actual = counter.countDown();
    actual = counter.countDown();
    expect(actual).toBe(2);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    let actual = counter.countDown();
    actual = counter.countDown();
    actual = counter.countDown();
    actual = counter.countDown();
    expect(actual).toBe(0);
    actual = counter.countDown();
    expect(actual).toBe(0);
    actual = counter.countDown();
    expect(actual).toBe(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    let actual = seasons.next();
    expect(actual).toBe("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    let actual = seasons.next();
    actual = seasons.next();
    expect(actual).toBe("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    expect(actual).toBe("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    expect(actual).toBe("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    expect(actual).toBe("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    actual = seasons.next();
    expect(actual).toBe("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    let actual = focus.drive(100);
    expect(actual).toBe(100);
    actual = focus.drive(100);
    expect(actual).toBe(200);
    actual = focus.drive(100);
    expect(actual).toBe(300);
    actual = focus.drive(200);
    expect(actual).toBe(500);
    actual = focus.drive(200);
    expect(actual).toBe(600);
  });
  test("[16] driving the car uses gas", () => {
    focus.drive(300);
    expect(focus.tank).toBe(10);
    focus.drive(150);
    expect(focus.tank).toBe(5);
    focus.drive(200);
    expect(focus.tank).toBe(0);
  });
  test("[17] refueling allows to keep driving", () => {
    focus.drive(300);
    expect(focus.odometer).toBe(300);
    expect(focus.tank).toBe(10);
    focus.drive(150);
    expect(focus.odometer).toBe(450);
    expect(focus.tank).toBe(5);
    focus.drive(200);
    expect(focus.odometer).toBe(600); //out of gas
    expect(focus.tank).toBe(0); //out of gas
    focus.refuel(5);
    expect(focus).toMatchObject({ odometer: 600, tank: 5 });
    focus.refuel(15);
    expect(focus).toMatchObject({ odometer: 600, tank: 20 });
    focus.drive(450);
    expect(focus).toMatchObject({ tank: 5, odometer: 1050 });
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    focus.drive(300);
    expect(focus.odometer).toBe(300);
    expect(focus.tank).toBe(10);
    focus.drive(150);
    expect(focus.odometer).toBe(450);
    expect(focus.tank).toBe(5);
    focus.drive(200);
    expect(focus.odometer).toBe(600); //out of gas
    expect(focus.tank).toBe(0); //out of gas
    focus.refuel(5);
    expect(focus).toMatchObject({ odometer: 600, tank: 5 });
    focus.refuel(15);
    expect(focus).toMatchObject({ odometer: 600, tank: 20 });
    focus.refuel(1);
    expect(focus).toMatchObject({ odometer: 600, tank: 20 });
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test("[19] resolves true if passed an even number", async () => {
    let actual = await utils.isEvenNumberAsync(20);
    expect(actual).toBe(true);
    expect(actual).toBeTruthy();
  });
  test("[20] resolves false if passed an odd number", async () => {
    let actual = await utils.isEvenNumberAsync(21);
    expect(actual).toBe(false);
    expect(actual).not.toBeTruthy();
  });
});
