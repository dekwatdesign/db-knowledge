# `hrd_nationality`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_NATIONALITY_ID | char(3) | NO | PRI |  |  |  |
| HR_NATIONALITY_NAME | varchar(50) | YES | UNI |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | HR_NATIONALITY_NAME | yes | 1 |
| name_unique | HR_NATIONALITY_NAME | yes | 1 |
| PRIMARY | HR_NATIONALITY_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HR_NATIONALITY_ID": "00",
    "HR_NATIONALITY_NAME": "ไม่ระบุ",
    "ACTIVE": "False"
  },
  {
    "HR_NATIONALITY_ID": "01",
    "HR_NATIONALITY_NAME": "อังกฤษ",
    "ACTIVE": "False"
  },
  {
    "HR_NATIONALITY_ID": "02",
    "HR_NATIONALITY_NAME": "ปอร์ตุเกส",
    "ACTIVE": "False"
  },
  {
    "HR_NATIONALITY_ID": "03",
    "HR_NATIONALITY_NAME": "เนเธอร์แลนด์",
    "ACTIVE": "True"
  },
  {
    "HR_NATIONALITY_ID": "04",
    "HR_NATIONALITY_NAME": "เยอรมัน",
    "ACTIVE": "True"
  },
  {
    "HR_NATIONALITY_ID": "05",
    "HR_NATIONALITY_NAME": "ผรั่งเศส",
    "ACTIVE": "True"
  },
  {
    "HR_NATIONALITY_ID": "06",
    "HR_NATIONALITY_NAME": "เดนมาร์ก",
    "ACTIVE": "True"
  },
  {
    "HR_NATIONALITY_ID": "07",
    "HR_NATIONALITY_NAME": "สวีเดน",
    "ACTIVE": "True"
  }
]
```
