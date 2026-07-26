# `stock_disc_condition_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_disc_condition_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_disc_condition_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_disc_condition_type_name | stock_disc_condition_type_name | yes | 1 |
| PRIMARY | stock_disc_condition_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "stock_disc_condition_type_id": 2,
    "stock_disc_condition_type_name": "มีส่วนลด (Cash / Credit)"
  },
  {
    "stock_disc_condition_type_id": 3,
    "stock_disc_condition_type_name": "มีส่วนลด เฉพาะ (Cash)"
  },
  {
    "stock_disc_condition_type_id": 4,
    "stock_disc_condition_type_name": "มีส่วนลด เฉพาะ (Credit)"
  },
  {
    "stock_disc_condition_type_id": 1,
    "stock_disc_condition_type_name": "ไม่ม่ส่วนลดทุกกรณี"
  }
]
```
