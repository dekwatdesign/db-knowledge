# `durable_bail_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| durable_bail_status_id | int(11) | NO | PRI | 0 |  |  |
| durable_bail_status_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | durable_bail_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "durable_bail_status_id": 1,
    "durable_bail_status_name": "ยังไม่ถึงกำหนด"
  },
  {
    "durable_bail_status_id": 2,
    "durable_bail_status_name": "ให้เงินประกันแล้ว"
  },
  {
    "durable_bail_status_id": 3,
    "durable_bail_status_name": "ยกเลิกเงินประกัน"
  }
]
```
