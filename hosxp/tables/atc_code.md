# `atc_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| atc_code | varchar(15) | NO | PRI |  |  |  |
| atc_level_name | varchar(200) | YES | MUL | NULL |  |  |
| atc_ddd | varchar(50) | YES |  | NULL |  |  |
| atc_unit | varchar(25) | YES |  | NULL |  |  |
| atc_adm_route | varchar(10) | YES |  | NULL |  |  |
| atc_comment | varchar(100) | YES |  | NULL |  |  |
| atc_level | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_atc_level | atc_level | no | 1 |
| ix_atc_level_name | atc_level_name | no | 1 |
| PRIMARY | atc_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "atc_code": "A",
    "atc_level_name": "ALIMENTARY TRACT AND METABOLISM",
    "atc_ddd": "",
    "atc_unit": "",
    "atc_adm_route": "",
    "atc_comment": "",
    "atc_level": 1
  },
  {
    "atc_code": "A01",
    "atc_level_name": "STOMATOLOGICAL PREPARATIONS",
    "atc_ddd": "",
    "atc_unit": "",
    "atc_adm_route": "",
    "atc_comment": "",
    "atc_level": 3
  },
  {
    "atc_code": "A01A",
    "atc_level_name": "STOMATOLOGICAL PREPARATIONS",
    "atc_ddd": "",
    "atc_unit": "",
    "atc_adm_route": "",
    "atc_comment": "",
    "atc_level": 4
  },
  {
    "atc_code": "A01AB",
    "atc_level_name": "Antiinfectives and antiseptics for local oral treatment",
    "atc_ddd": "",
    "atc_unit": "",
    "atc_adm_route": "",
    "atc_comment": "",
    "atc_level": 5
  },
  {
    "atc_code": "A01AB02",
    "atc_level_name": "hydrogen peroxide",
    "atc_ddd": "60",
    "atc_unit": "mg",
    "atc_adm_route": "O",
    "atc_comment": "",
    "atc_level": 7
  },
  {
    "atc_code": "A01AB03",
    "atc_level_name": "chlorhexidine",
    "atc_ddd": "30",
    "atc_unit": "mg",
    "atc_adm_route": "O",
    "atc_comment": "",
    "atc_level": 7
  },
  {
    "atc_code": "A01AB04",
    "atc_level_name": "amphotericin B",
    "atc_ddd": "40",
    "atc_unit": "mg",
    "atc_adm_route": "O",
    "atc_comment": "",
    "atc_level": 7
  },
  {
    "atc_code": "A01AB05",
    "atc_level_name": "polynoxylin",
    "atc_ddd": "0.18",
    "atc_unit": "g",
    "atc_adm_route": "O",
    "atc_comment": "",
    "atc_level": 7
  }
]
```
