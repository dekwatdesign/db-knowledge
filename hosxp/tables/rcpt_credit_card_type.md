# `rcpt_credit_card_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| credit_card_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | credit_card_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "credit_card_id": 0,
    "name": "Unknown"
  },
  {
    "credit_card_id": 1,
    "name": "Amex"
  },
  {
    "credit_card_id": 2,
    "name": "Discover"
  },
  {
    "credit_card_id": 3,
    "name": "Mastercard"
  },
  {
    "credit_card_id": 4,
    "name": "Visa"
  },
  {
    "credit_card_id": 5,
    "name": "Debit"
  },
  {
    "credit_card_id": 6,
    "name": "Ebt"
  },
  {
    "credit_card_id": 7,
    "name": "Egc"
  }
]
```
