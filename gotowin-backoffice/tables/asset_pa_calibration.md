# `asset_pa_calibration`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CALIBRAT_ID | int | NO | PRI | NULL | auto_increment |  |
| CALIBRAT_NAME | varchar(100) | YES |  |  |  |  |
| CALIBRAT_ADDR | varchar(100) | YES |  |  |  |  |
| CONTACT_NAME | varchar(100) | YES |  |  |  |  |
| PHONE | varchar(30) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CALIBRAT_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "CALIBRAT_ID": 1,
    "CALIBRAT_NAME": "กองวิศวกรรมการทดสอบ",
    "CALIBRAT_ADDR": "ทดสอบ",
    "CONTACT_NAME": "[MASKED_FULLNAME]",
    "PHONE": "01111101",
    "updated_at": "2022-02-15 09:24:33",
    "created_at": "2022-02-15 09:24:33"
  }
]
```
