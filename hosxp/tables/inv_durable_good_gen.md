# `inv_durable_good_gen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_gen_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_gen_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_durable_good_gen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "inv_durable_good_gen_id": 1,
    "inv_durable_good_gen_name": "แบบมีเลขงบประมาณ"
  },
  {
    "inv_durable_good_gen_id": 2,
    "inv_durable_good_gen_name": "Federal Stock Number (FSN)"
  }
]
```
