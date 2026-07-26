# `hrd_citizenship`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_CITIZENSHIP_NAME | varchar(50) | YES | UNI |  |  |  |
| HR_CITIZENSHIP_ID | char(3) | NO | PRI |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | HR_CITIZENSHIP_NAME | yes | 1 |
| name_unique | HR_CITIZENSHIP_NAME | yes | 1 |
| PRIMARY | HR_CITIZENSHIP_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HR_CITIZENSHIP_NAME": "อังกฤษ",
    "HR_CITIZENSHIP_ID": "01",
    "ACTIVE": "False"
  },
  {
    "HR_CITIZENSHIP_NAME": "ปอร์ตุเกส",
    "HR_CITIZENSHIP_ID": "02",
    "ACTIVE": "False"
  },
  {
    "HR_CITIZENSHIP_NAME": "เนเธอร์แลนด์",
    "HR_CITIZENSHIP_ID": "03",
    "ACTIVE": "False"
  },
  {
    "HR_CITIZENSHIP_NAME": "เยอรมัน",
    "HR_CITIZENSHIP_ID": "04",
    "ACTIVE": "False"
  },
  {
    "HR_CITIZENSHIP_NAME": "ผรั่งเศส",
    "HR_CITIZENSHIP_ID": "05",
    "ACTIVE": "False"
  },
  {
    "HR_CITIZENSHIP_NAME": "เดนมาร์ก",
    "HR_CITIZENSHIP_ID": "06",
    "ACTIVE": "False"
  },
  {
    "HR_CITIZENSHIP_NAME": "สวีเดน",
    "HR_CITIZENSHIP_ID": "07",
    "ACTIVE": "False"
  },
  {
    "HR_CITIZENSHIP_NAME": "สวีสเซอร์แลนด์",
    "HR_CITIZENSHIP_ID": "08",
    "ACTIVE": "False"
  }
]
```
