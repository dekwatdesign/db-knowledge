# `grecord_go`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| RECORD_GO_ID | int | NO | PRI | NULL | auto_increment |  |
| RECORD_GO_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | RECORD_GO_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "RECORD_GO_ID": 1,
    "RECORD_GO_NAME": "ขอไปเองผ่านการอนุมัติ",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_GO_ID": 2,
    "RECORD_GO_NAME": "ไปตามแผนโรงพยาบาล",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_GO_ID": 3,
    "RECORD_GO_NAME": "แผนกระทรวง เขต จังหวัด",
    "updated_at": null,
    "created_at": null
  }
]
```
