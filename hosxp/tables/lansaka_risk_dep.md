# `lansaka_risk_dep`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(2) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| fullname | varchar(200) | YES |  | NULL |  |  |
| type | char(1) | YES |  | NULL |  |  |
| password | varchar(200) | YES |  | NULL |  |  |
| level | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "name": "opd",
    "fullname": "[MASKED_FULLNAME]",
    "type": "A",
    "password": "f2501c71a070a8bb42e898a80baee401",
    "level": "U"
  },
  {
    "id": 2,
    "name": "ipd",
    "fullname": "[MASKED_FULLNAME]",
    "type": "A",
    "password": "1abf005ea3f957c5cb79941ab7707c11",
    "level": "U"
  },
  {
    "id": 3,
    "name": "risk",
    "fullname": "[MASKED_FULLNAME]",
    "type": "C",
    "password": "7d9bc7bfd623ac78b246816868157590",
    "level": "A"
  },
  {
    "id": 4,
    "name": "manage",
    "fullname": "[MASKED_FULLNAME]",
    "type": "A",
    "password": "991d912445bd396599bbb31f697005bc",
    "level": "U"
  },
  {
    "id": 5,
    "name": "vej",
    "fullname": "[MASKED_FULLNAME]",
    "type": "A",
    "password": "1fb36c4ccf88f7e67ead155496f02338",
    "level": "U"
  },
  {
    "id": 6,
    "name": "pharm",
    "fullname": "[MASKED_FULLNAME]",
    "type": "A",
    "password": "85dfba75bcadb576723264b5986f2ac2",
    "level": "U"
  },
  {
    "id": 7,
    "name": "lab",
    "fullname": "[MASKED_FULLNAME]",
    "type": "A",
    "password": "d128a9569b806e3a93c91293aed3f40b",
    "level": "U"
  },
  {
    "id": 8,
    "name": "er",
    "fullname": "[MASKED_FULLNAME]",
    "type": "A",
    "password": "0ea711391df8d060f4f81141e192814e",
    "level": "U"
  }
]
```
