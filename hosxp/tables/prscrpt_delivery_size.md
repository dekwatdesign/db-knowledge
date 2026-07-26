# `prscrpt_delivery_size`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| prscrpt_delivery_size_id | int(11) | NO | PRI | 0 |  |  |
| prscrpt_delivery_size_name | varchar(255) | YES |  | NULL |  |  |
| prscrpt_delivery_company_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | prscrpt_delivery_size_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "prscrpt_delivery_size_id": 6,
    "prscrpt_delivery_size_name": "D+11",
    "prscrpt_delivery_company_id": 88
  },
  {
    "prscrpt_delivery_size_id": 1,
    "prscrpt_delivery_size_name": "A",
    "prscrpt_delivery_company_id": 88
  },
  {
    "prscrpt_delivery_size_id": 2,
    "prscrpt_delivery_size_name": "B",
    "prscrpt_delivery_company_id": 88
  },
  {
    "prscrpt_delivery_size_id": 3,
    "prscrpt_delivery_size_name": "C",
    "prscrpt_delivery_company_id": 88
  },
  {
    "prscrpt_delivery_size_id": 4,
    "prscrpt_delivery_size_name": "D",
    "prscrpt_delivery_company_id": 88
  },
  {
    "prscrpt_delivery_size_id": 5,
    "prscrpt_delivery_size_name": "00",
    "prscrpt_delivery_company_id": 88
  }
]
```
