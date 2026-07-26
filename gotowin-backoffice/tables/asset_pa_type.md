# `asset_pa_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| TEST_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| TEST_TYPE_NAME | varchar(50) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | TEST_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "TEST_TYPE_ID": 1,
    "TEST_TYPE_NAME": "เครื่องมือที่มีความเสี่ยงสูง",
    "updated_at": null,
    "created_at": null
  },
  {
    "TEST_TYPE_ID": 2,
    "TEST_TYPE_NAME": "ความเสี่ยงปานกลาง",
    "updated_at": null,
    "created_at": null
  },
  {
    "TEST_TYPE_ID": 3,
    "TEST_TYPE_NAME": "ความเสี่ยงต่ำ",
    "updated_at": null,
    "created_at": null
  }
]
```
