# `inv_durable_good_dch_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_dch_type_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_dch_type_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_durable_good_dch_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "inv_durable_good_dch_type_id": 1,
    "inv_durable_good_dch_type_name": "ขาย"
  },
  {
    "inv_durable_good_dch_type_id": 2,
    "inv_durable_good_dch_type_name": "แลกเปลี่ยน"
  },
  {
    "inv_durable_good_dch_type_id": 3,
    "inv_durable_good_dch_type_name": "โอน"
  },
  {
    "inv_durable_good_dch_type_id": 4,
    "inv_durable_good_dch_type_name": "แปรสภาพหรือทำลาย"
  },
  {
    "inv_durable_good_dch_type_id": 5,
    "inv_durable_good_dch_type_name": "อื่นๆ"
  }
]
```
