# `inv_durable_good_bail_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bail_status_id | int(11) | NO | PRI | 0 |  |  |
| bail_status_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | bail_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "bail_status_id": 1,
    "bail_status_name": "ยังไม่ถึงกำหนด"
  },
  {
    "bail_status_id": 2,
    "bail_status_name": "ให้เงินประกันแล้ว"
  },
  {
    "bail_status_id": 3,
    "bail_status_name": "ยกเลิกเงินประกัน"
  }
]
```
