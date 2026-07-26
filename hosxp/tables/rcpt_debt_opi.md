# `rcpt_debt_opi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_debt_opi_id | int(11) | NO | PRI | 0 |  |  |
| debt_id | int(11) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_debt_id | debt_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | rcpt_debt_opi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "rcpt_debt_opi_id": 1,
    "debt_id": 4081,
    "opi_guid": "{EF1AAEF7-F7FF-4BEC-84E4-4A0514233238}",
    "hos_guid": null
  },
  {
    "rcpt_debt_opi_id": 2,
    "debt_id": 4082,
    "opi_guid": "{BDA7A975-29CC-4BD9-AB87-5863B4ED311B}",
    "hos_guid": null
  },
  {
    "rcpt_debt_opi_id": 3,
    "debt_id": 4082,
    "opi_guid": "{2B0DE6B2-DABC-4532-8D25-99288B9BFB00}",
    "hos_guid": null
  },
  {
    "rcpt_debt_opi_id": 4,
    "debt_id": 4082,
    "opi_guid": "{C26232D1-9383-49C7-8D96-DCB1B158FABC}",
    "hos_guid": null
  },
  {
    "rcpt_debt_opi_id": 5,
    "debt_id": 4083,
    "opi_guid": "{646177FE-C3AB-45BB-9FB5-ACCDD636D39B}",
    "hos_guid": null
  },
  {
    "rcpt_debt_opi_id": 6,
    "debt_id": 4083,
    "opi_guid": "{2B84159D-6F20-4607-9B3B-D23F89F4EBC3}",
    "hos_guid": null
  },
  {
    "rcpt_debt_opi_id": 7,
    "debt_id": 4084,
    "opi_guid": "{AE16BB89-3885-454A-BB90-BD64F7EE50DA}",
    "hos_guid": null
  },
  {
    "rcpt_debt_opi_id": 8,
    "debt_id": 4084,
    "opi_guid": "{FE2E5A18-E559-471B-B50E-F8EE497B5E48}",
    "hos_guid": null
  }
]
```
