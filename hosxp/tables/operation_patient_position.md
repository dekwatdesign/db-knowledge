# `operation_patient_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(150) | NO | PRI |  |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": "[MASKED_FULLNAME]",
    "hos_guid": "{FDB5D092-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "name": "[MASKED_FULLNAME]",
    "hos_guid": "{FDB5D2FE-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "name": "[MASKED_FULLNAME]",
    "hos_guid": "{FDB5D40C-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "name": "[MASKED_FULLNAME]",
    "hos_guid": "{FDB5D51A-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "name": "[MASKED_FULLNAME]",
    "hos_guid": "{FDB5D614-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "name": "[MASKED_FULLNAME]",
    "hos_guid": "{FDB5D70E-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "name": "[MASKED_FULLNAME]",
    "hos_guid": "{FDB5D808-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "name": "[MASKED_FULLNAME]",
    "hos_guid": "{FDB5D902-F61C-11DE-BFF4-00215E472B30}"
  }
]
```
