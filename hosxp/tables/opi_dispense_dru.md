# `opi_dispense_dru`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_dispense_id | int(11) | NO | PRI | 0 |  |  |
| qr_code | varchar(200) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| item_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | opi_dispense_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opi_dispense_id": 171,
    "qr_code": "",
    "vn": "610111093020",
    "item_no": 3
  },
  {
    "opi_dispense_id": 173,
    "qr_code": "",
    "vn": "610111093020",
    "item_no": 4
  },
  {
    "opi_dispense_id": 176,
    "qr_code": "",
    "vn": "610111093020",
    "item_no": 2
  },
  {
    "opi_dispense_id": 182,
    "qr_code": "",
    "vn": "610111093022",
    "item_no": 3
  },
  {
    "opi_dispense_id": 183,
    "qr_code": "",
    "vn": "610111093022",
    "item_no": 2
  },
  {
    "opi_dispense_id": 186,
    "qr_code": "",
    "vn": "610111090108",
    "item_no": 4
  },
  {
    "opi_dispense_id": 188,
    "qr_code": "",
    "vn": "610111090108",
    "item_no": 5
  },
  {
    "opi_dispense_id": 198,
    "qr_code": "",
    "vn": "610111090106",
    "item_no": 4
  }
]
```
