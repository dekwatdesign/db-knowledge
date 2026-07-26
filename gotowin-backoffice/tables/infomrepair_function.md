# `infomrepair_function`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| REPAIRFUNCTION_ID | int unsigned | NO | PRI | NULL | auto_increment |  |
| REPAIRFUNCTION_NAME | varchar(255) | YES |  | NULL |  |  |
| ACTIVE | enum('True','False') | NO |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | REPAIRFUNCTION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "REPAIRFUNCTION_ID": 1,
    "REPAIRFUNCTION_NAME": "ใช้ใบแจ้งซ่อมของโรงพยาบาล",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  }
]
```
