module.exports = {
  get(req, res) {
    const posts = [
      {
        title: 'Sample post',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        tags: 'sample, lorem, ipsum',
        author: 'John Deo',
        created: '22/10/2018'
      },
      {
        title: 'Another sample post',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        tags: 'another, sample, lorem, ipsum',
        author: 'Angela Deo',
        created: '23/10/2018'
      }
    ]

    res.json(posts)
  }
}