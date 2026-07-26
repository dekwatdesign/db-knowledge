# `covid19_screen_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| covid19_screen_type_id | int(11) | NO | PRI | 0 |  |  |
| covid19_screen_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_covid19_screen_type_name | covid19_screen_type_name | yes | 1 |
| PRIMARY | covid19_screen_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "covid19_screen_type_id": 1,
    "covid19_screen_type_name": "ไม่เข้าเกณฑ์การติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ 2019"
  },
  {
    "covid19_screen_type_id": 2,
    "covid19_screen_type_name": "ต้องสังเกตอาการ"
  },
  {
    "covid19_screen_type_id": 3,
    "covid19_screen_type_name": "ต้องได้รับการดูแลอย่างเร่งด่วน"
  }
]
```
