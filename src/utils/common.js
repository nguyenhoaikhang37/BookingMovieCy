export const randomCategory = () => {
  const category = [
    'ACTION',
    'DRAMA',
    'THRILLER',
    'ADVENTURE',
    'CARTOON',
    'HORROR',
  ];

  return category[Math.floor(Math.random() * category.length)];
};
