# `asset_type_value`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| TYPE_VALUE_ID | int | NO | PRI | NULL | auto_increment |  |
| TYPE_VALUE_NAME | varchar(50) | YES |  |  |  |  |
| TYPE_VALUE_DETAIL | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | TYPE_VALUE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "TYPE_VALUE_ID": 1,
    "TYPE_VALUE_NAME": "สินทรัพย์ถาวร [ครุภัณฑ์ในเกณฑ์]",
    "TYPE_VALUE_DETAIL": "ครุภัณฑ์ที่มีมูลค่าตั้งแต่ 5000 บาทขึ้นไป",
    "updated_at": null,
    "created_at": null
  },
  {
    "TYPE_VALUE_ID": 2,
    "TYPE_VALUE_NAME": "สินทรัพย์ไม่ถาวร [ครุภัณฑ์ตำกว่าเกณฑ์]",
    "TYPE_VALUE_DETAIL": "ครุภัณฑ์ที่มีมูลค่าไม่ถึง 5000 บาท",
    "updated_at": null,
    "created_at": null
  },
  {
    "TYPE_VALUE_ID": 3,
    "TYPE_VALUE_NAME": "วัสดุคงทนถาวร [วัสดุคงทน]",
    "TYPE_VALUE_DETAIL": "วัสดุที่มีการใช้งานหลายครั้งราคาไม่เกิน 5000 บาท",
    "updated_at": null,
    "created_at": null
  }
]
```
