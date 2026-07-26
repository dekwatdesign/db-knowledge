# `hsk_dental_medical_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| vn | varchar(30) | NO | PRI |  |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| hn | varchar(9) | NO | PRI |  |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| cc | varchar(255) | YES |  | NULL |  |  |
| oral_exam | varchar(255) | YES |  | NULL |  |  |
| diag | varchar(255) | YES |  | NULL |  |  |
| treatment | varchar(255) | YES |  | NULL |  |  |
| plan | varchar(255) | YES |  | NULL |  |  |
| next_visit | varchar(255) | YES |  | NULL |  |  |
| doctor | varchar(30) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| PRIMARY | id | yes | 1 |
| PRIMARY | vn | yes | 2 |
| PRIMARY | hn | yes | 3 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "id": 1,
    "vn": "670913070710",
    "an": "",
    "hn": "580000886",
    "vstdate": "2024-09-13",
    "vsttime": "11:18:05",
    "cc": "cc",
    "oral_exam": "Oral examination",
    "diag": "Diagnosis",
    "treatment": "Treatment",
    "plan": "Plan",
    "next_visit": "Next Visit",
    "doctor": "306",
    "d_update": "2024-09-13 11:18:05"
  }
]
```
