## API Schema 짜기

API Spec

User's profile photos

- https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg
- https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg

### Tweets

#### Tweet Schema

```json
{
  id: string,  // 트윗 아이디
  text: string,  // 트윗 텍스트
  createdAt: Date, // 트윗 생성 날짜
  name: string,  // 사용자 이름
  username: string,  // 사용자 닉네임 (아이디)
  url: string (optional) // 사용자 프로파일 사진 URL
}
```

#### `GET` /tweets

- get all tweets / Response 200

```json
{
   [tweet, tweet ....]
}
```

#### `GET` /tweets?username=:username

- get all tweets for user's username / Response 200

```json
{
   [tweet, tweet ....]
}
```

#### `GET` /tweets/:id

- get tweet by id / Response 200

```json
{
   tweet
}
```

#### `POST` /tweets

##### creating new tweet

- Request

```json
{
   text,
   name,
   username,
   url, (optinal)
}
```

- Response / 201

```json
{
  tweet
}
```

#### `PUT` /tweets/:id

##### updating tweet

- Request

```json
{
  text
}
```

- Response / 200

```json
{
  tweet
}
```

#### `DELETE` /tweets/:id

- updating tweet / Response 204

## 포스트맨으로 collection 생성하기

REST API 만들기 전에 테스트할 수 있는 환경을 미리 만들어 놓는다

Variables에 사용할 base, 주소(http://localhost:8080)를 입력하고 저장  
콜렉션에서 add request로 새로운 리퀘스트 만든다

```
< Get Tweets >
GET | {{base}}/tweets 을 만들고 저장  (만들어놓은 변수 base 사용)

< Get Tweets by username >
GET | {{base}}/tweets?username=:username

< Get Tweets by id >
GET | {{base}}/tweets/1

< Create Tweet >
POST | {{base}}/tweets
Body : {  "text":  "New message :9",
          "username": "ona",
          "id": "Ona"
        }

< Update Tweet >
PUT | {{base}}/tweets/1
Body : {
          "text":  "Updated message"
       }

< Delete Tweet >
DELETE | {{base}}/tweets/1
```

---

npm init, npm i express cors helmet morgan express-async-errors, npm i nodemon --save-dev 설치

---

## auth

- username || id, password 로 로그인
- 가입 (username, password, name, email, profile url)

### User Schema

```json
{
   id: string,
   username: string,  // 서버에서 사용자 식별을 위해 사용할 수 있는 id와 이름이 충돌할 수 있으므로 id 대신 username을 사용
   password: string,
   id: string,
   email: string,
   url: string (optional)
}
```

#### `POST`/auth/signup

- Request

```json
{
   username,
   password,
   name,
   email,
   url
}
```

- Response

```json
{
   token,
   username
}
```

#### `POST`/auth/login

- Request

```json
{
   username,
   password
}
```

- Response

```json
{
   token,
   username
}
```

#### `GET`/auth/me

어플리케이션이 실행될 때, 기존에 가지고 있던 token이 있다면 유효한지 검사하는 용도

```json
{
   token,
   username
}
```

auth/me 만들 때 포스트맨에서 header에 Authorization 만들고 <type>, <credentials>을 명시해준다
token을 전해주므로 type 은 bearer
