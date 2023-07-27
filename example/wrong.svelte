<script>

  export let property // unused

  const anotherObject   ={
  "properties"  : `This is ugly, the whitespace is too much, and the backticks are unnecessary`,

  object:{spacing:'required!'},

  functions: [( env )=>  console.log(env.password),function  ({password}) { console.log( password  )}]
};

</script>

<div class="{anotherObject.className}"></div>
