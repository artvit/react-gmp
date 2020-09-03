export default new Array(4).fill({
  title: 'Pulp Fiction',
  imgSrc: 'https://www.miramax.com/media/assets/Pulp-Fiction1.png',
  genre: 'Action & Adventure',
  released: 1994,
  length: 154,
  rate: 4.3,
  shortDescription: 'Oscar winning Movie',
  description: `
    Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin 
    Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, 
    Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los 
    Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the 
    mid-20th century, known for their graphic violence and punchy dialogue.`
}).map((value, idx) => ({ ...value, id: idx }));
