# `dw_surveil_organism`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(5) | NO | PRI |  |  |  |
| name | varchar(250) | YES |  | NULL |  |  |

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
    "code": "011",
    "name": "Cholera ELTOR INABA     (E.I)"
  },
  {
    "code": "012",
    "name": "Cholera ELTOR OGAWA     (E.O)"
  },
  {
    "code": "013",
    "name": "Cholera ELTOR HIROSHIMA (E.H)"
  },
  {
    "code": "016",
    "name": "Cholera 0139           (0139)"
  },
  {
    "code": "019",
    "name": "Unknown"
  },
  {
    "code": "031",
    "name": "V.P (Vibrio Parahaemolyticus)"
  },
  {
    "code": "032",
    "name": "Salmonella"
  },
  {
    "code": "033",
    "name": "Staphylococcus"
  }
]
```
