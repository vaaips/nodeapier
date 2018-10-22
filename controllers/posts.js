module.exports = {
  get(req, res) {
    const data = {
      title: 'Sample post',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      tags: 'sample, lorem, ipsum',
      author: 'John Deo',
      created: '22/10/2018'
    }

    res.json(data)
  }
}