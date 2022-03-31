function p() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      console.log('sou promise');
      resolve();

    }, 2000);

  });

};

export default async function () {

  await p();
  console.log('terminou');

};