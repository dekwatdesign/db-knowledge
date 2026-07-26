# `supplies_con_premise`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PERMISE_ID | int | NO | PRI | NULL | auto_increment |  |
| PERMISE_NAME | varchar(50) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PERMISE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "PERMISE_ID": 1,
    "PERMISE_NAME": "บิลเงินสด",
    "updated_at": null,
    "created_at": null
  },
  {
    "PERMISE_ID": 2,
    "PERMISE_NAME": "บิลเงินสด/ใบกำกับภาษี",
    "updated_at": null,
    "created_at": null
  },
  {
    "PERMISE_ID": 3,
    "PERMISE_NAME": "ใบกำกับภาษี",
    "updated_at": null,
    "created_at": null
  },
  {
    "PERMISE_ID": 4,
    "PERMISE_NAME": "ใบกำกับภาษี/ใบเสร็จรับเงิน",
    "updated_at": null,
    "created_at": null
  },
  {
    "PERMISE_ID": 5,
    "PERMISE_NAME": "ใบแจ้งหนี้",
    "updated_at": null,
    "created_at": null
  },
  {
    "PERMISE_ID": 6,
    "PERMISE_NAME": "ใบรับเงิน",
    "updated_at": null,
    "created_at": null
  },
  {
    "PERMISE_ID": 7,
    "PERMISE_NAME": "ใบรับรองแทนใบเสร็จรับเงิน",
    "updated_at": null,
    "created_at": null
  },
  {
    "PERMISE_ID": 8,
    "PERMISE_NAME": "ใบส่งของ",
    "updated_at": null,
    "created_at": null
  }
]
```
