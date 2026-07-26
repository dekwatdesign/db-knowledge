# `informrepair_openform`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| OPENFORM_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| OPENFORM_CODE | varchar(255) | YES |  | NULL |  |  |
| OPENFORM_NAME | varchar(255) | YES |  | NULL |  |  |
| OPENFORM_STATUS | enum('True','False') | NO |  | NULL |  |  |
| updated_at | datetime | NO |  | NULL |  |  |
| created_at | datetime | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | OPENFORM_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "OPENFORM_ID": 1,
    "OPENFORM_CODE": "REPAIRNORMAL",
    "OPENFORM_NAME": "ฟังก์ชั่นสร้างฟอร์มแจ้งซ่อมทั่วไป",
    "OPENFORM_STATUS": "True",
    "updated_at": "2021-12-08 14:52:49",
    "created_at": "2021-12-08 14:52:49"
  }
]
```
