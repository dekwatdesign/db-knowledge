# `hl7_act_priority`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(10) | NO | PRI |  |  |  |
| display | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_display | display | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "A",
    "display": "ASAP"
  },
  {
    "code": "CR",
    "display": "callback results"
  },
  {
    "code": "CS",
    "display": "callback for scheduling"
  },
  {
    "code": "CSP",
    "display": "callback placer for scheduling"
  },
  {
    "code": "CSR",
    "display": "contact recipient for scheduling"
  },
  {
    "code": "EL",
    "display": "elective"
  },
  {
    "code": "EM",
    "display": "emergency"
  },
  {
    "code": "P",
    "display": "preop"
  }
]
```
