# `icd11_exclusion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(10) | NO | PRI | NULL |  |  |
| ordinal | int(11) | NO | PRI | NULL |  |  |
| label | varchar(500) | NO |  | NULL |  |  |
| ref_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | code | yes | 1 |
| PRIMARY | ordinal | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "MB20.0",
    "ordinal": 0,
    "label": "Catatonia",
    "ref_code": null
  },
  {
    "code": "MB20.0",
    "ordinal": 1,
    "label": "Delirium",
    "ref_code": "6D70"
  },
  {
    "code": "ND56.8",
    "ordinal": 0,
    "label": "multiple: crushing injuries NOS",
    "ref_code": "ND34"
  },
  {
    "code": "ND56.8",
    "ordinal": 1,
    "label": "multiple traumatic amputations NOS",
    "ref_code": "ND35"
  },
  {
    "code": "QD71.2",
    "ordinal": 0,
    "label": "Institutional upbringing",
    "ref_code": "QE94"
  },
  {
    "code": "6C4D.11",
    "ordinal": 0,
    "label": "Episode of harmful use of dissociative drugs including ketamine or PCP",
    "ref_code": "6C4D.0"
  },
  {
    "code": "6C4D.11",
    "ordinal": 1,
    "label": "Dissociative drug dependence including ketamine or PCP",
    "ref_code": "6C4D.2"
  },
  {
    "code": "XE3DE",
    "ordinal": 0,
    "label": "Part of building or grounds, tennis court",
    "ref_code": "XE7DE"
  }
]
```
