<script>
  const anotherObject = {
    properties: 'This is not ugly, the whitespace is perfect, and the quotes are single',

    object: { spacing: 'required!' },

    functions: [
      env =>  console.log(env.password),
      function({ password }) {
        console.log(password);
      },
    ],
  };

</script>

<div class={anotherObject.className} />
