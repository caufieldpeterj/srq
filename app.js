const manyOptions = [
    {   
        Name: 'Kayaking',
        Description: 'Friends, I have been navel-gazing',
    },
    {
        Name: 'Seashells',
        Description: 'starfish and sandollars',
    },
    {
        Name: 'Golfing',
        Description: 'Below par',
    },
    {
        Name: 'Circus',
        Description: 'Animal-friendly',
    },
  ];

  Options.insertMany(manyOptions, (error, options) => {
      if (error) {
          console.log(error);
      } else {
          console.log(options);
      }
  })