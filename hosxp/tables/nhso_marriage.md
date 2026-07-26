# `nhso_marriage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_marriage_code | varchar(3) | NO | PRI |  |  |  |
| nhso_marriage_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nhso_marriage_name | nhso_marriage_name | yes | 1 |
| PRIMARY | nhso_marriage_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "nhso_marriage_code": "9",
    "nhso_marriage_name": "ไม่ทราบ"
  },
  {
    "nhso_marriage_code": "3",
    "nhso_marriage_name": "แยกกันอยู่ (ร้าง)"
  },
  {
    "nhso_marriage_code": "5",
    "nhso_marriage_name": "แยกกันอยู่"
  },
  {
    "nhso_marriage_code": "6",
    "nhso_marriage_name": "สมณะ"
  },
  {
    "nhso_marriage_code": "2",
    "nhso_marriage_name": "สมรส"
  },
  {
    "nhso_marriage_code": "1",
    "nhso_marriage_name": "โสด"
  },
  {
    "nhso_marriage_code": "4",
    "nhso_marriage_name": "อื่นๆ"
  }
]
```
