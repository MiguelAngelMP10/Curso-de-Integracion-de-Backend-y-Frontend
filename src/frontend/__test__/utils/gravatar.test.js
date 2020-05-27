import gravatar from "../../utils/gravatar";

test("Gravatar Function test", () => {
  const email = "mmunozpozos@gmail.com";
  const gravatarUrl =
    "https://gravatar.com/avatar/00af22ee25f951d5bbb6227bb8d1d877";
  expect(gravatarUrl).toEqual(gravatar(email));
});
