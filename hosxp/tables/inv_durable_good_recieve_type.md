# `inv_durable_good_recieve_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| recieve_type_id | int(11) | NO | PRI | 0 |  |  |
| recieve_type_name | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | recieve_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "recieve_type_id": 1,
    "recieve_type_name": "ซื้อโดยวิธีตกลงราคา"
  },
  {
    "recieve_type_id": 2,
    "recieve_type_name": "แลกเปลี่ยน"
  },
  {
    "recieve_type_id": 3,
    "recieve_type_name": "จ้างทำโดยวิธีประกวดราคา"
  }
]
```
