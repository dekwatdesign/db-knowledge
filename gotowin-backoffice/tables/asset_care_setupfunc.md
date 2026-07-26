# `asset_care_setupfunc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SETFUNCCARE_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| SETFUNCCARE_NAME | varchar(50) | YES |  | NULL |  |  |
| ACTIVE | enum('True','False') | NO |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SETFUNCCARE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "SETFUNCCARE_ID": 1,
    "SETFUNCCARE_NAME": "ฟังก์ชันลัดขั้นตอนการบันทึกให้ดำเนินการสำเร็จ",
    "ACTIVE": "False",
    "updated_at": "2022-08-09 03:42:20",
    "created_at": "2022-04-28 07:48:07"
  }
]
```
