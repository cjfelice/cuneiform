# README

Only outputs json data when visiting pages below; not connected to app. Useful for test data for setting up front end

Must be run on vagrant machine. Two terminals is probably best, one vagrant, one for React

Running this api with React server will make one of them ask if you would like to change ports, they don't like each other yet, enter `y`.

Did not get around to removing log and tmp nonsense. They update with every refresh of the server. Recommend not pushing those changes to the repository, it's no use.

- Ruby version 2.7.1
  To change:

```
rvm install 2.7.1
```

- Rails version 6.0.3.2
  To change:

```
gem install rails -v 6.0.3.2
```

- System dependencies added
  (for others see Gemfile)

'fast_jsonapi'
'rails'

- Configuration

```
bundle install
```

- Database creation

```
rails db:prepare
rails db:seed
```

- Run server (port 3001)

```
rails s -b 0.0.0.0 -p 3001
```

```
http://localhost:3001
```

for json output of tables:

```
http://localhost:3001/api/v1/users
http://localhost:3001/api/v1/canvases
http://localhost:3001/api/v1/images
http://localhost:3001/api/v1/comments
http://localhost:3001/api/v1/likes
http://localhost:3001/api/v1/videos
```
