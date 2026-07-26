# `informrepair_systemtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| INFORMRE_ST_ID | int unsigned | NO | PRI | NULL | auto_increment |  |
| INFORMRE_ST_NAME | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | INFORMRE_ST_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "INFORMRE_ST_ID": 1,
    "INFORMRE_ST_NAME": "ตรวจสอบความเรียบร้อยระบบไฟฟ้า ประปา และอาคารสถานที่",
    "updated_at": "2023-07-26 09:52:49",
    "created_at": "2022-02-24 14:14:50"
  },
  {
    "INFORMRE_ST_ID": 2,
    "INFORMRE_ST_NAME": "ซ่อมแซมครุภัณฑ์ อุปกรณ์ และอาคารสถานที่ ในกรณีเร่งด่วน/ฉุกเฉิน",
    "updated_at": "2023-07-26 09:54:50",
    "created_at": "2023-07-26 09:53:50"
  },
  {
    "INFORMRE_ST_ID": 3,
    "INFORMRE_ST_NAME": "งานอื่นๆ",
    "updated_at": "2023-07-26 09:54:04",
    "created_at": "2023-07-26 09:54:04"
  }
]
```
