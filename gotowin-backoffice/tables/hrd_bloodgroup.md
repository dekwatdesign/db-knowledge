# `hrd_bloodgroup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_BLOODGROUP_ID | char(2) | NO | PRI |  |  | รหัสหมู่เลือด |
| HR_BLOODGROUP_NAME | varchar(50) | YES |  |  |  | ชื่อหมู่เลือด |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hr_bloodgroup_id_UNIQUE | HR_BLOODGROUP_ID | yes | 1 |
| PRIMARY | HR_BLOODGROUP_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "HR_BLOODGROUP_ID": "01",
    "HR_BLOODGROUP_NAME": "A"
  },
  {
    "HR_BLOODGROUP_ID": "02",
    "HR_BLOODGROUP_NAME": "B"
  },
  {
    "HR_BLOODGROUP_ID": "03",
    "HR_BLOODGROUP_NAME": "AB"
  },
  {
    "HR_BLOODGROUP_ID": "04",
    "HR_BLOODGROUP_NAME": "O"
  },
  {
    "HR_BLOODGROUP_ID": "05",
    "HR_BLOODGROUP_NAME": "AB-Nagative"
  }
]
```
