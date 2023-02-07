db.produtos.findOne({
  vendidos: {
    $gt: 50,
    $lt: 100,
  },
},
{},
{
  $sort: { vendidos: 1 },
});