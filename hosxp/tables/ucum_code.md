# `ucum_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ucum_code_id | int(11) | NO | PRI | 0 |  |  |
| ucum_code | varchar(10) | YES | MUL | NULL |  |  |
| ucum_name | varchar(100) | YES | UNI | NULL |  |  |
| category | varchar(20) | YES |  | NULL |  |  |
| synonyms | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_code | ucum_code | no | 1 |
| ix_ucum_name | ucum_name | yes | 1 |
| ix_uni | ucum_code | yes | 1 |
| ix_uni | category | yes | 2 |
| PRIMARY | ucum_code_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ucum_code_id": 2,
    "ucum_code": "'",
    "ucum_name": "arc minute",
    "category": "Clinical",
    "synonyms": "arcminutes; arcmin; arc minutes; arc mins"
  },
  {
    "ucum_code_id": 3,
    "ucum_code": "''",
    "ucum_name": "arc second",
    "category": "Clinical",
    "synonyms": "arcseconds; arcsecs"
  },
  {
    "ucum_code_id": 4,
    "ucum_code": "%",
    "ucum_name": "",
    "category": "Clinical",
    "synonyms": "percents"
  },
  {
    "ucum_code_id": 5,
    "ucum_code": "%[slope]",
    "ucum_name": "percent of slope",
    "category": "Clinical",
    "synonyms": "% slope; %slope; percents slopes"
  },
  {
    "ucum_code_id": 6,
    "ucum_code": "/(12.h)",
    "ucum_name": "per twelve hour",
    "category": "Clinical",
    "synonyms": "per 12 hours; 12hrs; 12 hrs; /12hrs"
  },
  {
    "ucum_code_id": 7,
    "ucum_code": "/[arb'U]",
    "ucum_name": "per arbitrary unit",
    "category": "Clinical",
    "synonyms": "/arbU"
  },
  {
    "ucum_code_id": 8,
    "ucum_code": "/[HPF]",
    "ucum_name": "per high power field",
    "category": "Clinical",
    "synonyms": "/HPF; per HPF"
  },
  {
    "ucum_code_id": 9,
    "ucum_code": "/[IU]",
    "ucum_name": "per international unit",
    "category": "Clinical",
    "synonyms": "international units; /IU; per IU"
  }
]
```
