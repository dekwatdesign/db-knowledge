# `hsk_paytime_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pay_id | char(15) | NO | PRI |  |  |  |
| pay_type | varchar(10) | YES |  | NULL |  |  |
| pay_type_name | varchar(50) | YES |  | NULL |  |  |
| pay_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | pay_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pay_id": "7",
    "pay_type": "B",
    "pay_type_name": "ก่อนอาหาร",
    "pay_name": "7.00 น."
  },
  {
    "pay_id": "11",
    "pay_type": "B",
    "pay_type_name": "ก่อนอาหาร",
    "pay_name": "11.00 น."
  },
  {
    "pay_id": "16",
    "pay_type": "B",
    "pay_type_name": "ก่อนอาหาร",
    "pay_name": "16.00 น."
  },
  {
    "pay_id": "8",
    "pay_type": "A",
    "pay_type_name": "หลังอาหาร",
    "pay_name": "8.00 น."
  },
  {
    "pay_id": "12",
    "pay_type": "A",
    "pay_type_name": "หลังอาหาร",
    "pay_name": "12.00 น."
  },
  {
    "pay_id": "17",
    "pay_type": "A",
    "pay_type_name": "หลังอาหาร",
    "pay_name": "17.00 น."
  },
  {
    "pay_id": "20",
    "pay_type": "A",
    "pay_type_name": "หลังอาหาร",
    "pay_name": "20.00 น."
  },
  {
    "pay_id": "PRN",
    "pay_type": "PRN",
    "pay_type_name": "PRN",
    "pay_name": "PRN"
  }
]
```
