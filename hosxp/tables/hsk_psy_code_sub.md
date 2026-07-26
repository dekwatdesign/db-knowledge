# `hsk_psy_code_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code_sub | varchar(10) | NO | PRI |  |  |  |
| code_sub_name | varchar(100) | YES |  | NULL |  |  |
| istatus | varchar(1) | YES |  | NULL |  |  |
| group_sub | varchar(100) | YES |  | NULL |  |  |
| psy_code_group | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | code_sub | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code_sub": "G001",
    "code_sub_name": "Bender Visual Motor Gestalt Test ",
    "istatus": "Y",
    "group_sub": "Neuropsychological Test",
    "psy_code_group": "A004"
  },
  {
    "code_sub": "G002",
    "code_sub_name": "Bender Visual Motor Gestalt Test Secound Edition ",
    "istatus": "Y",
    "group_sub": "Neuropsychological Test",
    "psy_code_group": "A004"
  },
  {
    "code_sub": "G003",
    "code_sub_name": "Stroop Color and Word Test ",
    "istatus": "Y",
    "group_sub": "Neuropsychological Test",
    "psy_code_group": "A004"
  },
  {
    "code_sub": "G004",
    "code_sub_name": "Trail Making Test",
    "istatus": "Y",
    "group_sub": "Neuropsychological Test",
    "psy_code_group": "A004"
  },
  {
    "code_sub": "G005",
    "code_sub_name": "Wisconsin Card Sorting Test ",
    "istatus": "Y",
    "group_sub": "Neuropsychological Test",
    "psy_code_group": "A004"
  },
  {
    "code_sub": "G006",
    "code_sub_name": "Visual-Motor Integration ",
    "istatus": "Y",
    "group_sub": "Neuropsychological Test",
    "psy_code_group": "A004"
  },
  {
    "code_sub": "G008",
    "code_sub_name": "Test of Memory Malingering",
    "istatus": "Y",
    "group_sub": "Neuropsychological Test",
    "psy_code_group": "A004"
  },
  {
    "code_sub": "G009",
    "code_sub_name": "Wechsler Memory Scale",
    "istatus": "Y",
    "group_sub": "Neuropsychological Test",
    "psy_code_group": "A004"
  }
]
```
