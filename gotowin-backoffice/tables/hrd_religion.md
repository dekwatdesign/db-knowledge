# `hrd_religion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_RELIGION_ID | char(11) | NO | PRI |  |  | รหัสศาสนา |
| HR_RELIGION_NAME | varchar(45) | YES |  |  |  | ชื่อศาสนา |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hr_religion_id_UNIQUE | HR_RELIGION_ID | yes | 1 |
| PRIMARY | HR_RELIGION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "HR_RELIGION_ID": "01",
    "HR_RELIGION_NAME": "พุทธ"
  },
  {
    "HR_RELIGION_ID": "02",
    "HR_RELIGION_NAME": "อิสลาม"
  },
  {
    "HR_RELIGION_ID": "03",
    "HR_RELIGION_NAME": "ฮินดู"
  },
  {
    "HR_RELIGION_ID": "04",
    "HR_RELIGION_NAME": "คริศต์"
  }
]
```
