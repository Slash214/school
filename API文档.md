---
title: 教务管理系统 v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.11"

---

# 教务管理系统

> v1.0.0

# 用户管理

## PUT 更新用户信息

PUT /user/update

> Body 请求参数

```json
{
  "id": 0,
  "nickname": "string",
  "password": "string",
  "level": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» id|body|integer| 是 |none|
|» nickname|body|string| 是 |昵称|
|» password|body|string| 是 |登陆密码|
|» level|body|integer| 是 |身份1 为 学生 ，2为老师， 3为管理员|

> 返回示例

> 成功

```json
{
  "data": [
    1
  ],
  "message": "更新成功",
  "code": 200
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 访问登陆

POST /user/login

> Body 请求参数

```json
{
  "username": "string",
  "password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |用户名|
|» password|body|string| 是 |密码|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 删除用户信息

GET /user/delete

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|integer| 否 |用户ID|

> 返回示例

> 成功

```json
{
  "data": 1,
  "message": "删除成功",
  "code": 200
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询用户

GET /user/list

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageSize|query|number| 否 |数量20|
|pageIndex|query|number| 否 |1页|
|level|query|number| 否 |1 学生  2 老师   获取学生 or 获取老师  不传就获取所有的|
|grade_id|query|integer| 否 |班级id 获取该班级ID下的所有人员  不传就获取所有的|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 增加用户/注册

POST /user/create

> Body 请求参数

```json
{
  "username": "string",
  "password": "string",
  "nickname": "string",
  "level": 0,
  "sex": 0,
  "gread_id": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |登陆账号|
|» password|body|string| 是 |登陆密码|
|» nickname|body|string| 是 |昵称|
|» level|body|integer| 是 |1学生 2老师 3管理员|
|» sex|body|integer| 是 |性别 1男 2女|
|» gread_id|body|integer| 是 |班级ID|

> 返回示例

> 成功

```json
{
  "data": {
    "id": 1,
    "username": "林丽",
    "nickname": "姜静",
    "password": "voluptate incididunt",
    "level": 2,
    "updatedAt": "2022-10-28T06:44:15.720Z",
    "createdAt": "2022-10-28T06:44:15.720Z"
  },
  "message": "注册成功",
  "code": 200
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 课程管理

## GET 获取课程

GET /course/list

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageSize|query|number| 否 |none|
|pageIndex|query|number| 否 |none|

> 返回示例

> 成功

```json
{
  "data": [
    {
      "id": 1,
      "course_name": "思想政治教育",
      "course_user_id": 12,
      "course_grade_id": 1,
      "course_room_id": 1,
      "course_time": "周一 上午",
      "start_time": "2022-10-31 08:30",
      "end_time": "2022-10-31 10:00",
      "createdAt": "2022/10/28 11/17",
      "updatedAt": "2022/10/28 11/17",
      "user": {
        "nickname": "姜芳",
        "sex": "2",
        "grade_id": 1
      },
      "grade": {
        "grade_name": "大二班"
      },
      "room": {
        "room_name": "力理教室",
        "room_address": "北京孝感市武山县",
        "room_picture": "http://dummyimage.com/400x400"
      }
    }
  ],
  "message": "success",
  "code": 200,
  "total": 1
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 创建课程

POST /course/create

> Body 请求参数

```json
{
  "course_name": "string",
  "course_user_id": 0,
  "course_grade_id": 0,
  "course_room_id": 0,
  "course_time": "string",
  "start_time": "string",
  "end_time": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» course_name|body|string| 是 |课程名称|
|» course_user_id|body|integer| 是 |课程教师|
|» course_grade_id|body|integer| 是 |课程班级|
|» course_room_id|body|integer| 是 |课程教室|
|» course_time|body|string| 是 |课程时间 周一，周二，上午  等等|
|» start_time|body|string| 是 |开始时间|
|» end_time|body|string| 是 |结束时间|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 教室管理

## GET 获取所有教室

GET /room/list

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageSize|query|number| 否 |none|
|pageIndex|query|number| 否 |none|
|state|query|integer| 否 |0 或者 不传这个参数表示 获取所有教室， 1获取空闲教室  2获取正在使用的教室|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PUT 更新教室信息

PUT /room/update

> Body 请求参数

```json
{
  "state": 0,
  "id": 0,
  "room_name": "string",
  "room_address": "string",
  "room_picture": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» state|body|integer| 是 |none|
|» id|body|integer| 是 |教室id|
|» room_name|body|string| 是 |教室名称|
|» room_address|body|string| 是 |教室地址|
|» room_picture|body|string| 是 |教室图片|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 增加教室

POST /room/create

> Body 请求参数

```json
{
  "room_name": "string",
  "room_address": "string",
  "room_picture": "string",
  "room_type": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» room_name|body|string| 是 |教室名|
|» room_address|body|string| 是 |教室地址|
|» room_picture|body|string| 是 |教室图片|
|» room_type|body|string| 是 |教室类型|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 班级/年级管理

## GET 查询班级

GET /grade/list

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageSize|query|number| 否 |none|
|pageIndex|query|number| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 增加班级

POST /grade/create

> Body 请求参数

```json
{
  "grade_name": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» grade_name|body|string| 是 |班级名|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 数据模型

