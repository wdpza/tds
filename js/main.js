const validator = new JustValidate('#loginForm');

validator
  .addField('#inputEmail', [
    {
      rule: 'required',
    },
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#inputPassword', [
    {
      rule: 'required',
    },
    {
      rule: 'password',
    },
  ]);