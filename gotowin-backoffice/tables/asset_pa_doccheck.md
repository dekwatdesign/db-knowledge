# `asset_pa_doccheck`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| DOCCHECK_ID | int | NO | PRI | NULL | auto_increment |  |
| DOCCHECK_NAME | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | DOCCHECK_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "DOCCHECK_ID": 1,
    "DOCCHECK_NAME": "ปกติ",
    "updated_at": null,
    "created_at": null
  },
  {
    "DOCCHECK_ID": 2,
    "DOCCHECK_NAME": "ผิดปกติ",
    "updated_at": null,
    "created_at": null
  }
]
```
