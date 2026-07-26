# `durable_recieve_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| durable_recieve_type_id | int(11) | NO | PRI | 0 |  |  |
| durable_recieve_type_name | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | durable_recieve_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "durable_recieve_type_id": 1,
    "durable_recieve_type_name": "ซื้อโดยวิธีตกลงราคา"
  },
  {
    "durable_recieve_type_id": 2,
    "durable_recieve_type_name": "แลกเปลี่ยน"
  },
  {
    "durable_recieve_type_id": 3,
    "durable_recieve_type_name": "จ้างทำโดยวิธีประกวดราคา"
  }
]
```
