# `informrepair_setupfunc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SETFUNC_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| SETFUNC_NAME | varchar(50) | YES |  | NULL |  |  |
| ACTIVE | enum('True','False') | NO |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SETFUNC_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "SETFUNC_ID": 1,
    "SETFUNC_NAME": "ฟังก์ชันลัดขั้นตอนการบันทึกให้ดำเนินการสำเร็จ",
    "ACTIVE": "False",
    "updated_at": "2022-06-28 09:57:11",
    "created_at": "2022-06-28 09:57:11"
  }
]
```
