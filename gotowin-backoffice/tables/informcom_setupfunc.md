# `informcom_setupfunc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SETFUNCCOM_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| SETFUNCCOM_NAME | varchar(50) | YES |  | NULL |  |  |
| ACTIVE | enum('True','False') | NO |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SETFUNCCOM_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "SETFUNCCOM_ID": 1,
    "SETFUNCCOM_NAME": "ฟังก์ชันลัดขั้นตอนการบันทึกให้ดำเนินการสำเร็จ",
    "ACTIVE": "False",
    "updated_at": "2022-06-28 09:57:11",
    "created_at": "2022-06-28 09:57:11"
  }
]
```
