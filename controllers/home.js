/**
 * GET /
 * Home page.
 */
const musicApi = require('music-api');

exports.index = (req, res) => {
  let keywords = req.query.keywords;
  let engine = req.query.engine;
  if(keywords){
    musicApi.searchSong(engine,{
      key: keywords,
      limit:25,
      page:1,
    
    }).then( ret => {
      let data = ret;
      res.render('home', {
        title: 'Home',
        data,
        engine,
        keywords
      });
    })
  }else{
res.render('home', {
    title: 'Home'
  });
  }
  
  
};
exports.getSong= (req, res) => {
  let vendor = req.params.vendor;
  musicApi.getSong(req.query.engine, req.query || {})
    .then(data => res.redirect(data.url))
    .catch(err => res.send(err))
};