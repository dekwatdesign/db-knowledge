# `hsk_psy_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(5) | NO | PRI |  |  |  |
| code_name | varchar(200) | YES |  | NULL |  |  |
| code_group | varchar(100) | YES |  | NULL |  |  |
| istatus | varchar(1) | YES |  | NULL |  |  |
| group_sor | varchar(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "A001",
    "code_name": "Intelligence test",
    "code_group": "Psychological Assessment",
    "istatus": "Y",
    "group_sor": "A"
  },
  {
    "code": "A003",
    "code_name": "Personality test",
    "code_group": "Psychological Assessment",
    "istatus": "Y",
    "group_sor": "C"
  },
  {
    "code": "A004",
    "code_name": "Neuropsychological test",
    "code_group": "Psychological Assessment",
    "istatus": "Y",
    "group_sor": "D"
  },
  {
    "code": "A005",
    "code_name": "Achievement test",
    "code_group": "Psychological Assessment",
    "istatus": "Y",
    "group_sor": "F"
  },
  {
    "code": "A006",
    "code_name": "Developmental test",
    "code_group": "Psychological Assessment",
    "istatus": "Y",
    "group_sor": "G"
  },
  {
    "code": "A007",
    "code_name": "ประเมินสภาพสมองเบื้องต้น",
    "code_group": "Psychological Assessment",
    "istatus": "Y",
    "group_sor": "H"
  },
  {
    "code": "A002",
    "code_name": "ประเมิน PTSD",
    "code_group": "Psychological Assessment",
    "istatus": "Y",
    "group_sor": "B"
  },
  {
    "code": "A009",
    "code_name": "Individual Psychotherapy",
    "code_group": "Psychotherapy",
    "istatus": "Y",
    "group_sor": "I"
  }
]
```
