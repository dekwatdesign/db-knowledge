# `payment_note_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| payment_note_type_id | int(11) | NO | PRI | 0 |  |  |
| payment_note_type_name | varchar(200) | YES | UNI | NULL |  |  |
| amount | double(22,2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_payment_note_type_name | payment_note_type_name | yes | 1 |
| PRIMARY | payment_note_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "payment_note_type_id": 1,
    "payment_note_type_name": "เหรียญ 1 บาท",
    "amount": 1.0
  },
  {
    "payment_note_type_id": 2,
    "payment_note_type_name": "เหรียญ 2 บาท",
    "amount": 2.0
  },
  {
    "payment_note_type_id": 3,
    "payment_note_type_name": "เหรียญ 5 บาท",
    "amount": 5.0
  },
  {
    "payment_note_type_id": 5,
    "payment_note_type_name": "แบงค์ 20 บาท",
    "amount": 20.0
  },
  {
    "payment_note_type_id": 6,
    "payment_note_type_name": "แบงค์ 50 บาท",
    "amount": 50.0
  },
  {
    "payment_note_type_id": 7,
    "payment_note_type_name": "แบงค์ 100 บาท",
    "amount": 100.0
  },
  {
    "payment_note_type_id": 8,
    "payment_note_type_name": "แบงค์ 500 บาท",
    "amount": 500.0
  },
  {
    "payment_note_type_id": 9,
    "payment_note_type_name": "แบงค์ 1000 บาท",
    "amount": 1000.0
  }
]
```
